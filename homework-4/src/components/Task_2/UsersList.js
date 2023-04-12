import React from "react";
import UserInfo from "../Task_1/User"
import { withFetchingData } from "../../HOCs/withFetchingData";

const UserList = ({ data: userData, isLoading, error }) => {
    return (
        <div>
            <h1>task 2</h1>
            {isLoading && <div>LOading...</div>}
            {error && <div>Error: {error}</div>}
            {userData && userData.map(user => <UserInfo key={user.id}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                company={user.company}
            />)}
        </div>
    )
}

export default withFetchingData(UserList);