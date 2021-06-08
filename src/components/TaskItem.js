import React from 'react'
import { useDispatch } from 'react-redux'
import { complete, deletetask } from '../js/action/taskAction'
import EditTask from './EditTask'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
            <div className={todo.isDone ? "done" : null}>{todo.task}</div>
            <div>{todo.task}</div>
            <button onClick={() => dispatch(complete(todo.id))}>{todo.isDone ? "Undo" : "complete"}</button>
            <EditTask todo={todo}/>
            <button onClick={() => dispatch(deletetask(todo.id))}>delete</button>
        </div>
    )
}

export default TaskItem
