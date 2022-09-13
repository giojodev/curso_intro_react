//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos=[
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: true },
// ]

function App() {
  const localStorageTodos=localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if(!localStorageTodos)  {
    
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos=[];
  }else {
    parsedTodos=JSON.parse(localStorageTodos);
  }

  const [todos,setTodos]=React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
      const stringifierTodos=JSON.stringify(newTodos);
      localStorage.setItem("TODOS_V1",stringifierTodos);
      setTodos(newTodos);
  };

  const completeTodo = (text) =>{
      const todoIndex=todos.findIndex(todo=>todo.text===text);
     

      const newTodos=[...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
      setTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
   

    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
    setTodos(newTodos);
}


  return (
    <AppUI
    total={totalTodos}
    completed={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searcherTodos={searcherTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;