import React from 'react'
import './CreateTodoButton.css'
function CreateTodoButton(props){

 const onClickButton = (msg) =>{
    props.setOpenModal(!props.openModal);
 }

    return(
        <section>
            <button 
            className="CreateTodoButton"
            onClick={onClickButton}
            >+</button>
        </section>
    );
}

/*
MANEJO DE EVENTOS

Los nombres de eventos en React comienzan con “on” y luego el primer caracter de cada palabra en mayúsculas:

onClick
onDoubleClick
onMouseEnter
onMouseLeave
onMouseMove
onKeyPress
onKetUp
onSubmit
*/
export {CreateTodoButton};