import {ADD_TASK,DELETE_TASK,TOGGLE_COMPLETE,EDIT_TASK} from "../types";

const initialState = {
    taskList:[
        {
             id:0,
        task: "Learn HTML And CSS",        
        isDone: true
        },
        {
             id:1,
        task: "Learn JS And ES6", 
        isDone: true   
        },
        {
             id:2,
        task:"Learn NODE JS",
        isDone:false   
        },
    ]
}   

const taskReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ADD_TASK:
             return {...state,taskList:{...state.taskList,payload}};
             
        case DELETE_TASK :
             return {
                ...state,
                taskList:state.taskList.filter(todo => todo.id !==payload )
            };    
    
        case TOGGLE_COMPLETE: 
             return {
                 ...state,
                 taskList:state.taskList.map(todo => 
                   todo.id === payload ?  {...todo, isDone: !todo.isDone } : todo
                ),
             };

        case EDIT_TASK:  
             return {
                 ...state,
                taskList:state.taskList.map((todo) => 
                  todo.id === payload.id ? {...todo,task:payload.value} : todo
                ),
             } ; 
               
        default:
            return state;
    } 
}

export default taskReducer;
