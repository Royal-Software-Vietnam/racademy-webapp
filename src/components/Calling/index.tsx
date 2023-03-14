import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8888')

export default function App() {
    const [localStream, setLocalStream] = useState(null)
    const [remoteStreams, setRemoteStreams] = useState([])
    const [peerConnections, setPeerConnections] = useState({})
    const [isCalling, setIsCalling] = useState(false)

    useEffect(() => {
        socket.on(`connect`, () => { console.log(`Connected`) })

        // <--- start: on call event --->

        socket.on(`call`, (data) => {
            console.log(`Received call form ${data.callerId}`)
            const newRemoteStreams = [...remoteStreams]
            if (data.callerId in peerConnections) {
                console.log('Already connected to peer')
                return
            }
            const newPeerConnection = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.stunprotocol.org' }],
            })

            newPeerConnection.ontrack = (event: RTCTrackEvent) => {
                console.log(`Received remote stream`)
                const newRemoteStream = event.streams[0]
                // @ts-ignore
                newRemoteStreams.push(newRemoteStream)
                setRemoteStreams(newRemoteStreams)
            }

            newPeerConnection.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
                if (event.candidate) {
                    socket.emit('candidate', { candidate: event.candidate, calleeId: data.callerId })
                }
            }

            setPeerConnections({ ...peerConnections, [data.callerId]: newPeerConnection })
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream: any) => {
                console.log('Received local stream')
                setLocalStream(stream)
                setIsCalling(true)
                stream.getTracks().forEach((track: any) => {
                    newPeerConnection.addTrack(track, stream)
                })

                newPeerConnection.createOffer().then((offer: any) => {
                    newPeerConnection.setLocalDescription(offer)
                    socket.emit('offer', { offer, calleeId: data.callerId })
                })
            })
        })

        // <--- end: on call event --->

        socket.on(`offer`, (data) => {
            console.log(`Received offer`)
            const newRemoteStreams = [...remoteStreams]

            if (data.callerId in peerConnections) {
                console.log('Already connected to peer')
                return
            }

            const newPeerConnection = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.stunprotocol.org' }],
            })

            const desc = new RTCSessionDescription(data.offer)
            newPeerConnection.setRemoteDescription(desc)

            newPeerConnection.ontrack = (event: RTCTrackEvent) => {
                console.log('Received remote stream')
                const newRemoteStream = event.streams[0]
                // @ts-ignore
                newRemoteStreams.push(newRemoteStream)
                setRemoteStreams(newRemoteStreams)
            }

            newPeerConnection.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
                if (event.candidate) {
                    socket.emit('candidate', { candidate: event.candidate, calleeId: data.callerId })
                  }
            }
        })
    }, [])
}