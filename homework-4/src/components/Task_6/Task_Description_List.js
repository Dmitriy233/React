import { NavLink, Outlet } from 'react-router-dom'

export const TaskDescriptionList = () => {
    const params = ["1", "2", "3", "4", "5"]
    return (
        <ul>
            <li><NavLink to={`/task_description/${params[0]}`}>Task #1 - Toggler HOC</NavLink></li>
            <li><NavLink to={`/task_description/${params[1]}`}>Task #2 – Fetching Data HOC</NavLink></li>
            <li><NavLink to={`/task_description/${params[2]}`}>Task #3 - render-props</NavLink></li>
            <li><NavLink to={`/task_description/${params[3]}`}>Task #4: - Tooltip</NavLink></li>
            <li><NavLink to={`/task_description/${params[4]}`}>Task #5 - custom hooks</NavLink></li>

            <Outlet />
        </ul>
    )
}