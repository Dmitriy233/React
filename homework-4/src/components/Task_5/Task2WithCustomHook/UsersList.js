import { useFetch } from "../../../hooks/useFetch";
import { User } from "../Task1WithCustomHook/User";

const BASE_USERS_URL = "https://jsonplaceholder.typicode.com/users?_limit=10";

export const Users = () =>{
    const [data, isLoading, error] = useFetch(BASE_USERS_URL)
    return (
        <div>
            {isLoading && <div>LOading...</div>}
            {error && <div>Error: {error}</div>}
            {data && data.map(user => <User key={user.id}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                company={user.company}
            />)}
        </div>
    )
}