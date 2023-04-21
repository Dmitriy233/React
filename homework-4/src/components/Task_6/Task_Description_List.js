import { useState } from "react"
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { tasksDescriptions } from "../../data/TaskDescriptions";

export const TaskDescriptionList = () => {
    const [activeTask, setActiveTask] = useState(null);
    const navigate = useNavigate();

    const onLick = (taskId) => {
        setActiveTask(taskId);
        navigate(`/description/${taskId}`);
    };


    return (
        <div>
            <ul>
                {tasksDescriptions.map(({ id, taskId, title }) => (
                    <li
                        key={id}
                        onClick={() => onLick(taskId)}
                        className={`task ${activeTask === taskId ? "task_active" : ""}`}
                    >
                            Task {taskId} - {title}

                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}