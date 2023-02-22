import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue  } ) {
    // const {searchValue,setSearchValue  } = React.useContext(TodoContext)
    // const [searchValue,setSearchValue]= React.useState('');

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(

        <input 
        className='TodoSearch' 
        placeholder="Buscar Tarea"
        value={searchValue}
        onChange={onSearchValueChange}
        />
        
    );
}

export {TodoSearch};