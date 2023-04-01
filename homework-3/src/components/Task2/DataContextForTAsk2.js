import React, { useEffect, useState } from "react";

export const ContextForTask2 = React.createContext();

export const ContextForTask2Provider = (props) => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => setAlbums(result));
    })
    return (
        <ContextForTask2.Provider value={albums}>
            {props.children}
        </ContextForTask2.Provider>
    )
}