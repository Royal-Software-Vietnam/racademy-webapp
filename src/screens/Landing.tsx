import React, { useState } from "react"
import styled from "styled-components"
import { OutLineTransparent, Filled } from "../components/Button.styles"
import { Box, Overlay } from "../components/Landing.styles"

const Rounder = styled.div`
    box-sizing: border-box;
    width: 2.6rem;
    height: 2.6rem;
    left: 121px;
    top: 30px;
    border: 2px solid #00FFF0;
    border-radius: 6px;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        transform: rotate(-45deg);
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
    }
`
const LoginButton = styled.button`
    width: 6rem;
    height: 2.5rem;
    color: #5B5B5B;
    background: conic-gradient(from 90deg at 50% 100%, #FFFFFF 0deg, #FFFFFF 360deg);
    box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.03);
    border-radius: 80px;
`
const SignupButton = styled.button`
    width: 6rem;
    height: 2.5rem;

    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 24px rgba(0, 0, 0, 0.03);
    border-radius: 80px;
`
const Slogan = styled.h2`
    font-style: normal;
    font-weight: 700;
    max-width: 520px;
    font-size: 2.5rem;
    line-height: 3.3rem;
    color: white;
    span {
        color: #F48C06;
    }
`

const PrimaryText = styled.div`
    font-style: normal;
    font-weight: bolder;
    font-size: 3rem;
    line-height: 110%;
    text-align: center;
    color: #010514;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const SecondaryText = styled.p`
    font-style: normal;
    font-weight: bolder;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
    color: rgba(1, 5, 20, 0.8);

    flex: none;
    order: 1;
    flex-grow: 0;
`

const GradientText = styled.p`
    background: linear-gradient(90deg, #136CB5 0%, #49BBBD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 4rem;
    font-weight: bolder;
    text-fill-color: transparent;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export default function Landing() {

    return <div>
        <div className="heading bg-[#49BBBD] pt-[30px]">
            <nav className="h-[5.18rem] mx-[7.56rem] bg-[#49BBBD] flex items-center justify-between">
                <div className="nav_logo flex items-center">
                    <Rounder>
                        <h1>R</h1>
                    </Rounder>
                    <h1 className="text-[1.3rem] font-bold text-white ml-[0.81rem]">ACADEMY</h1>
                </div>
                <div className="flex items-center space-x-[2rem] font-semibold text-white">
                    <p className="text-[0.99rem]">Home</p>
                    <p className="text-[0.99rem]">Course</p>
                    <p className="text-[0.99rem]">Careers</p>
                    <p className="text-[0.99rem]">Blog</p>
                    <p className="text-[0.99rem]">About Us</p>
                    <LoginButton>Login</LoginButton>
                    <SignupButton>Signup</SignupButton>
                </div>
            </nav>
            <div className="heading-content lg:mt-[4rem] mx-[7.56rem] flex justify-between">
                <div className="txt-group w-full lg:mt-12">
                    <Slogan><span>Studying</span> Online is now much easier</Slogan>
                    <p className="max-w-[520px] mt-[24px] w-[80%] text-white">Racademy is an interesting platform that will teach you in more an interactive way</p>
                    <div className="mt-[24px] flex space-x-[24px]">
                        <LoginButton style={{ width: 'unset', height: 'unset', padding: '8px 16px' }}><b style={{ color: '#5B5B5B' }}>Join for free</b></LoginButton>
                        <SignupButton style={{ width: 'unset', height: 'unset', padding: '8px 16px' }}><b style={{ color: 'white' }}>How it works</b></SignupButton>
                    </div>
                </div>
                <div className="info-group relative w-full flex justify-center">
                    <img src="/images/landing-heading.png" alt="" className="w-[23rem] h-[30rem] translate-x-8" />
                    <div className="absolute right-0 top-0 space-x-[22px] flex justify-end">
                        <img src="/images/chart-icon.svg" alt="" />
                    </div>
                    <div className="absolute bg-white top-16 left-0 p-[22px] space-x-[22px] bg-opacity-80 rounded-xl flex">
                        <img src="/images/calendar-icon.svg" />
                        <div className="txt-group">
                            <h2 className="font-bold text-lg">{`{{Number}}`}</h2>
                            <p>Assisted Student</p>
                        </div>
                    </div>
                    <div className="absolute bg-white top-44 right-0 p-[22px] space-x-[22px] bg-opacity-80 rounded-xl flex">
                        <img src="/images/email-icon.svg" />
                        <div className="txt-group">
                            <h2 className="font-bold text-lg">Congratulations</h2>
                            <p>Your admission completed</p>
                        </div>
                    </div>
                    <div className="absolute bg-white top-80 left-0 p-[22px] bg-opacity-80 rounded-xl">
                        <div className="flex space-x-[22px]">
                            <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                            <div className="txt-group">
                                <h2 className="font-bold text-lg">User Experience Class</h2>
                                <p>Today at 12.00 PM</p>
                                <button className="mt-[10px] bg-pinky rounded-2xl text-white p-[6px] w-full">Join now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="success mt-[100px] mx-[7.56rem]">
            <PrimaryText>Our Success</PrimaryText>
            <SecondaryText className="max-w-[666px] m-auto font-semibold mt-[16px]">
                Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
            </SecondaryText>
            <div className="success-items mt-[100px] flex justify-between items-center">
                <div className="m-auto flex flex-col items-center">
                    <GradientText>15K+</GradientText>
                    <b className="text-2xl text-center">Students</b>
                </div>
                <div className="m-auto flex flex-col items-center">
                    <GradientText>70%</GradientText>
                    <b className="text-2xl text-center">Total Success</b>
                </div>
                <div className="m-auto flex flex-col items-center">
                    <GradientText>35</GradientText>
                    <b className="text-2xl text-center">Main questions</b>
                </div>
                <div className="m-auto flex flex-col items-center">
                    <GradientText>26</GradientText>
                    <b className="text-2xl text-center">Chief experts</b>
                </div>
                <div className="m-auto flex flex-col items-center">
                    <GradientText>03</GradientText>
                    <b className="text-2xl text-center">Years of experience</b>
                </div>
            </div>
        </div>
        <div className="success mt-[100px] mx-[7.56rem]">
            <PrimaryText><b>All In One <span className="text-secondary"> Cloud Software</span></b></PrimaryText>
            <SecondaryText className="max-w-[666px] m-auto mt-[16px] font-semibold">
                Racademy is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </SecondaryText>
            <div className="success-items space-x-[30px] mt-[100px] flex items-stretch justify-between">
                <Box className="hover:scale-110 duration-300 relative flex flex-col items-center">
                    <img src="/images/service01-icon.svg" className="absolute -top-[3.5rem] w-32" alt="" />
                    <div className="mt-[120px]">
                        <SecondaryText>Online Billing, Invoicing & Contracts</SecondaryText>
                        <p className="mt-[20px] text-center">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                    </div>
                </Box>
                <Box className="hover:scale-110 duration-300 relative flex flex-col items-center">
                    <img src="/images/service02-icon.svg" className="absolute -top-[3.5rem] w-32" alt="" />
                    <div className="mt-[120px]">
                        <SecondaryText>Easy Scheduling & Attendance Tracking</SecondaryText>
                        <p className="mt-[20px] text-center">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                    </div>
                </Box>
                <Box className="hover:scale-110 duration-300 relative flex flex-col items-center">
                    <img src="/images/service03-icon.svg" className="absolute -top-[3.5rem] w-32" alt="" />
                    <div className="mt-[120px]">
                        <SecondaryText>Customer Tracking</SecondaryText>
                        <p className="mt-[20px] text-center">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
                    </div>
                </Box>
            </div>
        </div>
        <div className="success mt-[100px] mx-[7.56rem]">
            <PrimaryText><b>What is <span className="text-secondary"> Racademy</span></b></PrimaryText>
            <SecondaryText className="max-w-[666px] m-auto mt-[16px] font-semibold">
                Racademy is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </SecondaryText>
            <div className="success-items space-x-[80px] mt-[80px] flex items-center justify-center">
                <Box className="bg-cover w-[555px] h-[300px] bg-no-repeat" style={{ backgroundRepeat: 'no-repeat', padding: 0, background: `url(/images/service-image-01.jpg)` }}>
                    <Overlay className="bg-black bg-opacity-20 flex flex-col-reverse items-center justify-center w-full h-full">
                        <SecondaryText className="mb-[20px] !text-white">FOR INSTRUCTORS</SecondaryText>
                        <OutLineTransparent>Start a class today</OutLineTransparent>
                    </Overlay>
                </Box>

                <Box className="bg-cover w-[555px] h-[300px] bg-no-repeat" style={{ backgroundRepeat: 'no-repeat', padding: 0, background: `url(/images/service-image-02.jpg)` }}>
                    <Overlay className="bg-black bg-opacity-20 flex flex-col-reverse items-center justify-center w-full h-full">
                        <SecondaryText className="mb-[20px] !text-white">FOR STUDENTS</SecondaryText>
                        <Filled>Enter access code</Filled>
                    </Overlay>
                </Box>
            </div>
        </div>
    </div>
}