//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../ToDoContext'

// const defaultTodos=[
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: true },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
