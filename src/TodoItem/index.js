import React from 'react'
import './TodoItem.css'
import { AiFillCloseCircle,AiFillCheckCircle } from 'react-icons/ai';


function TodoItem(props){

    // const onComplete = () =>{
    //     alert("ya completaste la tarea" + props.text);
    // }

    // const onDelete = () =>{
    //     alert("Borraste la tarea" + props.text);
    // }


    return(
        <div className='TodoItemDiv'>
            <ul>
            <li className='TodoItemli'>
            <span 
            className={`TodoItemChk ${props.completed && 'TodoItemChkVisible'}` }
            onClick={props.onComplete}
            ><AiFillCheckCircle/></span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            className='TodoRemove' 
            onClick={props.onDelete}
            ><AiFillCloseCircle /></span>
            </li>  
            </ul>
            
        </div>
         
    );

}

export {TodoItem};