import React from 'react'
import { TodoContext } from '../ToDoContext';
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
import {EmptyTodos} from '../EmptyTodos'
import {TodoLoading} from '../TodoLoading'
import {TodosError} from '../TodosError';

function AppUI(){

  const {
    error,
    loading,
    searcherTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue  
  } = React.useContext(TodoContext);

    return(
<React.Fragment>
    
    <TodoCounter
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    />
    
    <TodoSearch
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    

        <TodoList>
        {error && <TodosError/>}
        {loading && <TodoLoading/>}
        {(!loading && !searcherTodos.length) && <EmptyTodos/>}
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

      {openModal&& (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    <CreateTodoButton
    setOpenModal={setOpenModal}
    />
    
    </React.Fragment>
    );

}

export {AppUI};