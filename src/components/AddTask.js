import React, { useState }   from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../js/action/taskAction'

const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const add = () => {
        if (text){
            dispatch(addtask({id:Math.random(),task:text.trim(),isDone:false}))
            setText("")
        }
        else alert("field shouldn't be empty")
    }
    
    return (
        <div className="add"> 
             <input type="text" onChange={e => setText(e.traget.value)} value={text} />
             <button onClick={add}>Add Task</button>
        </div>
    )
}

export default AddTask

