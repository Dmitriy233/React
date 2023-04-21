import { useToggler } from "../../../hooks/useToggler"

export const User = ({
    id,
    username,
    email,
    address: { city, street, suite },
    phone,
    company: { name },
}) => {
    const [isToggle, setToggle] = useToggler(false)
    return (
        <div>
            <p>{id}</p>
            <p>Name: {username}</p>
            <p>Email: {email}</p>
            {isToggle &&
                <div><h4>User data :</h4>
                    <p>City: {city}</p>
                    <p>Street: {street}</p>
                    <p>Suite: {suite}</p>
                    <p>Phone number: {phone}</p>
                    <p>Company: {name}</p>
                </div>}
            <button onClick={setToggle}>{isToggle ? "Hide details" : "See details"}</button>
        </div>
    )
}
