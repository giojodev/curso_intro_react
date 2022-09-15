import React from 'react'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searcherTodos,
    completeTodo,
    deleteTodo,
}){
    return(
<React.Fragment>
    
    <TodoCounter
    total={totalTodos}
    completed={completedTodos}
    />
    
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    
    <TodoList>
      {error && <p>Ocurrio un error</p>}
      {loading && <p>Estamos cargando....</p>}
      {(!loading && !searcherTodos.length) && <p>Crea tu primer TODO</p>}
      {searcherTodos.map(todos=>(
         <TodoItem 
         key={todos.text} 
         text={todos.text} 
         completed={todos.completed}
         onComplete={()=>{completeTodo(todos.text)
         }}
         onDelete={()=>{deleteTodo(todos.text)
         }}
         />
      ))}
    </TodoList>
    <CreateTodoButton/>
    
    </React.Fragment>
    );

}

export {AppUI};