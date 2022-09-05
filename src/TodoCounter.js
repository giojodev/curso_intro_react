import React from 'react'
import './TodoCounter.css'

const estilos = {
    color: 'red',
    backgroundColor:'yellow',
};

function TodoCounter(){
    return (
    <section>
        <h1 className='TodoCounterh1'> ✅ To Do List, by Gio ✅ </h1>
        <h2 className='TodoCounterh2'>Has completado 2 de n TODOs</h2>
    </section>
    
    )
    ;
}

export {TodoCounter};