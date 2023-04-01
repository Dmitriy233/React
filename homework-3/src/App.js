import React from 'react';
import Albums from './components/Task1/Task1Part1';
import AlbumsWithContext from './components/Task1/Task1Part2';
import AlbumFuncComponent from './components/Task2/Task2';
import Square from './components/Task3/Task3Part1';
import VideoPlayer from './components/Task3/Task3Part2';


function App() {
    return (
        <>
            <h1>Task 1</h1>
            <Albums />
            <h2>task 1 part 2</h2>
            <AlbumsWithContext/>
            <h1>Task 2</h1>
            <AlbumFuncComponent />
            <h1>Task 3</h1>
            <Square />
            <h2>task 3 part 2</h2>
            <VideoPlayer/>
        </>
)
}

export default App;
