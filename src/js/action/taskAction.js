import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from "../reducer/taskReducer"

export const addtask = (newtask ) => {
    return {
        type:ADD_TASK,
        payload:newtask 

    }
}
export const deletetask = (id) => ({
    type: DELETE_TASK,
    payload:id
})

export const complete = (id) => ({
    type: TOGGLE_COMPLETE,
    payload:id
})

export const editTask = (id,value) => ({
    type: EDIT_TASK,
    payload:{id,value}
})


