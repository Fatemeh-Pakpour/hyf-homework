import React from 'react';


const Task = (props)=>{
        return (
            <div className = "task">
                <span className ="task-title">
                    <button className = "remove-task" onClick = {()=>{props.removeTask(props.id)}}>✖</button>
                   {props.taskTitle}
                </span>    
            </div>
        )
}


export default Task;
