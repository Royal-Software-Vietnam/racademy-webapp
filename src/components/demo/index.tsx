export default function Hehe () {

    const SelectorB = (props:any) => {
        return <div>
            <select>
                { props.data.map((i:any) => <option>{i.title}</option>) }
            </select>
        </div>
    }

    return <div>

        <select>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

    </div>
}
