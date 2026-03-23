import { v4 as uuidv4 } from 'uuid';

export type TaskListType = {
    taskId: number
    title: string
    isDone: boolean
}

export type TaskListPropsType = {
    tasks : TaskListType[]
    students: string[]
    title: string
}



export const TaskList = (props: TaskListPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.tasks.map(el => {
                    return (
                        <li key={el.taskId}>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    )
                })}
            </ul>

            <ul>
                {props.students.map(el => {
                    return <li key={uuidv4()}>{el}</li>
                })}
            </ul>
        </div>
    )
}