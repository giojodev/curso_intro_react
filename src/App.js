//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'

const defaulttodos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: true },
]

function App() {
  const [todos,setTodos]=React.useState(defaulttodos);
  const [searchValue,setSearchValue]=React.useState('');
  
  const completedTodos=defaulttodos.filter(defaulttodos=>!!defaulttodos.completed).length;
  const totalTodos=defaulttodos.length;

  let searcherTodos=[];

  if(!searchValue.length>=1){
    searcherTodos=defaulttodos;
  } else{
    searcherTodos=defaulttodos.filter(defaulttodos=>{
      const todoText=defaulttodos.text.toLowerCase();
      const searchText=searchValue.toLowerCase();

       return todoText.includes(searchText);
    });
    
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
         <TodoItem key={todos.text} text={todos.text} completed={todos.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
    
    </React.Fragment>
  );
}

export default App;
