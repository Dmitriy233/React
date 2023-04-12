import React from "react";

const Post = ({ dataPost: { title, completed } }) => {
    return (
        <li>
            <div>{`Title: ${title} - completed: ${completed}`}</div>
        </li>
    )
}
export default Post