import React from 'react'
import './TodoItem.css'

function TodoItem(props){
    return(
        <div className='TodoItemDiv'>
            <ul>
            <li className='TodoItemli'>
            <span className={`TodoItemChk ${props.completed && 'TodoItemChkVisible'}`}>√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className='TodoRemove'>X</span>
            </li>  
            </ul>
            
        </div>
         
    );

}

export {TodoItem};