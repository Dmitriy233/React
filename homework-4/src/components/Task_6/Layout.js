import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import arrow from '../img/arrow.png'

export const Layout = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goForward = () => navigate(1)

    return (
        <>
            <header>
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
            <Outlet />
        </>
    )
}
