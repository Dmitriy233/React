import React from "react";
import UsersList from "../components/Task_2/UsersList";
import AlbumsList from "../components/Task_2/AlbumsList";

const BASE_USERS_URL = "https://jsonplaceholder.typicode.com/users?_limit=10";
const BASE_ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10"

const Task2 = () => {
    return (
        <>
          <UsersList url = {BASE_USERS_URL}/>
          <AlbumsList url = {BASE_ALBUMS_URL} />
        </>
    )
}

export default Task2