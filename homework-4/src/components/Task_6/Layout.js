import { NavLink, useNavigate } from 'react-router-dom'
import arrow from '../../assets/arrow.png'

const links = [
    {
        id: "1",
        link: "/",
        title: "Main Page"
    },
    {
        id: "2",
        link: "/description",
        title: "Description"
    },
    {
        id: "3",
        link: "/task1",
        title: "Task1"
    },
    {
        id: "4",
        link: "/task2",
        title: "Task2"
    },
    {
        id: "5",
        link: "/task3",
        title: "Task3"
    },
    {
        id: "6",
        link: "/task4",
        title: "Task4"
    },
    {
        id: "7",
        link: "/task5",
        title: "Task5"
    },
];


export const Layout = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)

    return (
        <>
            {/* <header>
                <nav>
                    <li ><NavLink to="/" >Main</NavLink></li>
                    <li ><NavLink to="/task_description">Task Description</NavLink></li>
                    <li ><NavLink to="/task1">Task1</NavLink></li>
                    <li ><NavLink to="/task2">Task2</NavLink></li>
                    <li ><NavLink to="/task3">Task3</NavLink></li>
                    <li ><NavLink to="/task4">Task4</NavLink></li>
                    <li ><NavLink to="/task5">Task5</NavLink></li>
                    <button className='button' onClick={goBack}><img className='arrow' src={arrow} alt="" /></button>
                    <button className='button' onClick={goForward}><img className='arrow arrow-forward' src={arrow} alt="" /></button>
                </nav>
            </header>
            <Outlet /> */}
            <nav className="">
                <ul className="nav-list">
                    {links.map(({ id, link, title }) => (
                        <li className="nav-item" key={id}>
                            <NavLink
                                to={link}
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                    <button className='button' onClick={goBack}><img className='arrow' src={arrow} alt="" /></button>
                    <button className='button' onClick={goForward}><img className='arrow arrow-forward' src={arrow} alt="" /></button>
            </nav>
        </>
    )
}
