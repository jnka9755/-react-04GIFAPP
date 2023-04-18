import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  const [categories, setCategories] = useState([ 'Halo', 'Diablo' ]);

  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
        {/* Titulo */}
        <h1>Gif App</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory = { event => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        <ol>
          { categories.map( category => { 
                    return <li key={ category }>{ category }</li>
            }) 
          }
          {/* Gif */}
        </ol>
    </>
  )
}