import React from 'react'
import {useSelector} from 'react-redux'
import TaskItem from './TaskItem'
const TaskList = () => {
    
    const taskList = useSelector(state => state.taskReducer.taskList)
    return (
        <div>
            {
                taskList.map(todo => <TaskItem todo={todo}/>)
            }
        </div>
    )
}

export default TaskList
