import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const addCategory = (event) =>{

        event.preventDefault();
        const value = inputValue.trim();

        if( value.length < 1 ) return;
        
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => addCategory(event) }>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (event) => inputChange(event) }
            />
        </form>
    )
}