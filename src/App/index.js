//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { useTodos } from './useTodos';
import { TodoContext } from '../ToDoContext/useTodos';
import { TodoHeader } from '../TodoHeader';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton'
import {TodoItem} from '../TodoItem'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'
import {EmptyTodos} from '../EmptyTodos'
import {TodoLoading} from '../TodoLoading'
import {TodosError} from '../TodosError';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';

// const defaultTodos=[
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: true },
// ]

function App() {
 
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
    setSearchValue,
    addTodo,  
  } = useTodos();

  return(
    <React.Fragment>
        
        <TodoHeader>
          <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
    
        </TodoHeader>
        
    
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
              <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              
              />
            </Modal>
          )}
    
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
        
        </React.Fragment>
        );
}

export default App;
