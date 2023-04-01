import React, { useContext, useState } from "react";
import { ContextForTask2 } from "../Task2/DataContextForTAsk2";

const AlbumFuncComponent = () => {
    const albums = useContext(ContextForTask2)

    return (
        <div>
            {albums.map((item, index) =>
                <div key={item.id}>
                    ID: {item.id} -
                    Index: {index} -
                    Title: {item.title}
                </div>
            )}
        </div>
    )
}

export default AlbumFuncComponent;