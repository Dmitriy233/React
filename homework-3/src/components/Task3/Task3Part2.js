import React, { useState } from 'react'
import myVideo from '../media/shortVideo.mp4'

const VideoPlayer = () => {
    const [duration, setDuration] = useState('')
    const playerRef = React.useRef()
    const buttonRef = React.useRef()

    const handleMetadata = event => {
        setDuration(Math.floor(event.target.duration))
    }

    const handleClick = () => {
        if (buttonRef.current.innerText === "Play") {
            playerRef.current.play()
            buttonRef.current.innerText = "Pause"

        } else {
            playerRef.current.pause()
            buttonRef.current.innerText = "Play"
        }
    }

    return (
        <div>
            <video onLoadedMetadata={handleMetadata} ref={playerRef} width={550} height={312}>
                <source src={myVideo} />
            </video>
            <div>
                <button ref={buttonRef} onClick={handleClick}>Play</button>
                <span>00:00:{duration}</span>
            </div>
        </div>
    )
}

export default VideoPlayer