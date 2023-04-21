import { useParams } from 'react-router-dom'
import { tasksDescriptions } from '../../data/TaskDescriptions'

export const TaskDescription = () => {
    const params = useParams()

    const task = tasksDescriptions.find((item) => item.taskId === +params.taskId);
    return (
        <div>
        {task && (
          <>
            <div>{task.content}</div>
          </>
        )}
      </div>
        )
}
