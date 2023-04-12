import React from "react";
import { withToggler } from "../../HOCs/withToggler";

const UserInfo = ({
    id,
    username,
    email,
    address: { city, street, suite },
    phone,
    company: { name },
    toggled,
    changeToggle
}) => {

    return (
        <div>
            <p>{id}</p>
            <p>Name: {username}</p>
            <p>Email: {email}</p>
            {toggled &&
                <div><h4>User data :</h4>
                    <p>City: {city}</p>
                    <p>Street: {street}</p>
                    <p>Suite: {suite}</p>
                    <p>Phone number: {phone}</p>
                    <p>Company: {name}</p>
                </div>}
            <button onClick={changeToggle}>{toggled ? "Hide details" : "See details"}</button>
        </div>
    )
}

export default withToggler(UserInfo)

