import { useRef, useState } from 'react'

const Browse = () => {
    const [someState, setSomeState] = useState(1)

    let clicks = useRef(0)
    console.log('renderong')

    function handleClick() {
        setSomeState(someState + 1)
        clicks.current++

        console.log('You clicked ' + clicks.current + ' times!')
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            state: {someState}
        </div>
    )
}

export default Browse
