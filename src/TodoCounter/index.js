import React from 'react'
import './TodoCounter.css'

// const estilos = {
//     color: 'red',
//     backgroundColor:'yellow',
// };

function TodoCounter({totalTodos,completedTodos}){


    return (
    <section>
        <h1 className='TodoCounterh1'> ✅ To Do List, by Gio ✅ </h1>
        <h2 className='TodoCounterh2'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </section>
    
    )
    ;
}

export {TodoCounter};