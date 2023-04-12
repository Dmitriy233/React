import React, { useEffect, useState } from "react";


const DataMaker = ({ url, renderDataUrl }) => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setPosts(json))
            .catch(error => setError(error.message))
    }, [])
    return (
        <div>
            {error && <div>Error : {error}</div>}
            {renderDataUrl(posts)}
        </div>
    )
}
export default DataMaker;