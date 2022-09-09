//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

const defaultTodos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: true },
]

function App() {
  const [todos,setTodos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');
  
  const completedTodos=todos.filter(todos=>!!todos.completed).length;
  const totalTodos=todos.length;

  let searcherTodos=[];

  if(!searchValue.length>=1){
    searcherTodos=todos;
  } else{
    searcherTodos=todos.filter(todos=>{
      const todoText=todos.text.toLowerCase();
      const searchText=searchValue.toLowerCase();

       return todoText.includes(searchText);
    });
    
  }

  const completeTodo = (text) =>{
      const todoIndex=todos.findIndex(todo=>todo.text===text);
     

      const newTodos=[...todos];
      newTodos[todoIndex].completed = true;

      setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
   

    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);

    setTodos(newTodos);
}


  return (
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

export default App;
