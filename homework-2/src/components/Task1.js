import React from "react"

const UserCard = ({ name, surName, age }) => {
    return (
        <div>
            <div>User information: {name}, {surName}, {age}</div>
            <div>Name: {name}</div>
            <div>Surname: {surName}</div>
            <div>Age: {age}</div>
        </div>
    );
};

const UserCardText = (props) => {
    const validateAge = () => {
        if (props.age >= 18) {
            return <span>могу</span>
        } else {
            return <span>не могу</span>
        }
    };

    return (
        <>
            <div>My info: {props.name} - {props.surName} - {props.age} </div>
            <div>Привет {props.name}, тебе {props.age}лет, я {validateAge()} налить тебе выпить чего-нибудь</div>
        </>
    );
};

export default class User extends React.Component {
    state = {
        name: "Billi",
        surName: "Milligan",
        age: "25",
    };
    render() {
        return (
            <div>
                <UserCard name={this.state.name} surName={this.state.surName} age={this.state.age} />
                <UserCardText {...this.state} />
            </div>
        );
    };
};
