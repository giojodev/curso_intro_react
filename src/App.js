//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

const todos=[
  {text:"prueba",copmpleted:false},
  {text:"prueba 2",copmpleted:false},
  {text:"prueba 3",copmpleted:false},
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter/>
    
    <TodoSearch/>
    
    <TodoList>
      
      {todos.map(todo=>(
         <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    
    </React.Fragment>
  );
}

export default App;
