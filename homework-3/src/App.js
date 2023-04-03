import React, { createRef, useState } from 'react';
import Albums from './components/Task1/Task1Part1';
import AlbumsWithContext from './components/Task1/Task1Part2';
import AlbumFuncComponent from './components/Task2/Task2';
import Square from './components/Task3/Task3Part1';
import VideoPlayer from './components/Task3/Task3Part2';


function App() {
    const [numberPosts, setNumberPosts] = useState('')
    const inputRef = createRef(null)

    const handleClick = (event) => {
        setNumberPosts(inputRef.current.valueAsNumber)
    }

    return (
        <>
            <div>
                <h1>Task 1</h1>
                <Albums />
            </div>
            <div>
                <h2>task 1 part 2</h2>
                <input ref={inputRef} placeholder='Enter number posts' type='number' />
                <button onClick={handleClick} >submit</button>
                <AlbumsWithContext inputValue={numberPosts} />
            </div>
            <div>
                <h1>Task 2</h1>
                <AlbumFuncComponent />
            </div>
            <div>
                <h1>Task 3</h1>
                <Square />
            </div>
            <div>
                <h2>task 3 part 2</h2>
                <VideoPlayer/>
            </div>
        </>
    )
}

export default App;
