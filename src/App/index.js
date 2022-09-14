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

function useLocalStorage(itemName,initialValue){

  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem)  {
    
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=[];
  }else {
    parsedItem=JSON.parse(localStorageItem);
  }

  const [item,setItem]=React.useState(parsedItem);

  const saveItem = (newTodos) => {
    const stringifierTodos=JSON.stringify(newTodos);
    localStorage.setItem(itemName,stringifierTodos);
    setItem(newTodos);
};

return [
  item,
  saveItem,
];

}


function App() {

  const  [todos,saveTodos] = useLocalStorage('TODOS_V1',[]);

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
      saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
   

    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);

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
