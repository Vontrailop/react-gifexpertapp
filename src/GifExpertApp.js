import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    // const categories = ['Saikano', 'Samurai X', 'My Hero Academia'];
    
    const [categories, setCategories] = useState(['Pokemon']);
    
    // const handleAdd = ()=>{
    //     
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={ setCategories }/>
            <ol>
               { 
                   categories.map( (category) =>(
                       <GifGrid 
                        key = {category}
                        category={category} 
                       />
                   ))
                } 
            </ol>
        </>
    )
}

export default GifExpertApp
