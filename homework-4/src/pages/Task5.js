import { albumData } from "../data/albumData";
import { userData } from "../data/userData";
import { Albums } from "../components/Task_5/Task1WithCustomHook/Albums";
import { User } from "../components/Task_5/Task1WithCustomHook/User";
import { Users } from "../components/Task_5/Task2WithCustomHook/UsersList";
import { AlbumsList } from "../components/Task_5/Task2WithCustomHook/AlbumsList";
const Task5 = () => {
    return (
        <>
            <User username={userData.username}
                email={userData.email}
                address={userData.address}
                phone={userData.phone}
                company={userData.company} />
            <Albums title={albumData.title} url={albumData.url} />
            <Users />
            <AlbumsList />
        </>
    )
}





export default Task5;