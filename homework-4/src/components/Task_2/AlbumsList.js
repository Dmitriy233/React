import React from "react";
import Albums from "../Task_1/Albums";
import { withFetchingData } from "../../HOCs/withFetchingData";
const AlbumsList = ({ data: albumsData, isLoading, error }) => {
    return (
        <div>
            <h1>task 2</h1>
            {isLoading && <div>LOading...</div>}
            {error && <div>Error: {error}</div>}
            {albumsData && albumsData.map(album => <Albums key={album.id}
                title={album.title}
                url={album.url}
            />)}
        </div>
    )
}

export default withFetchingData(AlbumsList);