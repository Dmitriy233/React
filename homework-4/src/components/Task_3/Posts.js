import React from "react";
import Post from "./Post";

const Posts = ({ data }) => {
    return (
        <>
            {data.map(dataPost => <Post key={dataPost.id} dataPost={dataPost} />)}
        </>
    )
}
export default Posts;