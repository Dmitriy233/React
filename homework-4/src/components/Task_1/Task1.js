import React from "react";
import UserInfo from './User'
import Albums from "./Albums";
import { userData } from "../../data/userData";
import { albumData } from "../../data/albumData";


const Task1 = () => {
    return (
        <>
            <UserInfo
                username={userData.username}
                email={userData.email}
                address={userData.address}
                phone={userData.phone}
                company={userData.company}
            />
            <Albums title={albumData.title} url={albumData.url} />
        </>
    )
}

export default Task1