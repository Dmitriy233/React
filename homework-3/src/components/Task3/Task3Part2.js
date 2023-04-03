import React, { useState } from 'react'
import myVideo from '../media/shortVideo.mp4'

const VideoPlayer = () => {
    const [duration, setDuration] = useState('')
    const [buttonPlay, setButtonPlay] = useState('Play')
    const playerRef = React.useRef(null)

    const handleMetadata = event => {
        setDuration(Math.floor(playerRef.current.duration))
    }

    const handleClick = (event) => {
        setButtonPlay('Pause')
        buttonPlay === 'Play' ? playerRef.current?.play() : playerRef.current.pause() || setButtonPlay('Play')
    }

    return (
        <div>
            <video onLoadedMetadata={handleMetadata} ref={playerRef} width={550} height={312}>
                <source src={myVideo} />
            </video>
            <div>
                <button onClick={handleClick}>{buttonPlay}</button>
                <span>00:00:{duration}</span>
            </div>
        </div>
    )
}

export default VideoPlayer