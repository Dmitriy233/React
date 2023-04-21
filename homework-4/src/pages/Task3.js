import React from "react";
import DataMaker from "../components/Task_3/DataMaker";
import Posts from "../components/Task_3/Posts";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10"

const Task3 = () => {
    return (
        <div>
            <DataMaker url={BASE_URL} renderDataUrl={(posts) => <Posts data={posts} />} />
        </div>
    )
}
export default Task3