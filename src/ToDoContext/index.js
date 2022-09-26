import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider(props){
    const  {
        item : todos,
        saveItem : saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1',[]);
      
      const [openModal,setOpenModal]=React.useState(false);
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
    
      const addTodo = (text) =>{
        
        const newTodos=[...todos];
        newTodos.push({
          completed:false,
          text
        })
        saveTodos(newTodos);
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
        //el context proveera los datos pasados en la variable valor para ser consumidos y pasados a cada uno de los componentes dentro de 
        //la aplicacion de React 
        //Para pasar la informacion se utiliza la propiedad value en la cual sera indicada cada dato que sera recibido.
        //Todas las propiedades que se desee compartir en el contexto deben ser definidas dentro de esta propiedad
        //Para pasar varias propiedades o datos se define como un tipo objeto (JSON) para pasar varios datos.
        <TodoContext.Provider 
        value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searcherTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export {TodoContext,TodoProvider};