import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( {setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit= e=>{
    e.preventDefault()
    // console.log('submit hecho')
    if(inputValue.trim().length>2){
      setCategories(categorie=>[inputValue,...categorie, ])
      setInputValue('')
    }
    else return console.log('llena con algo')
  }
  return (
    <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
            />
          </form>
        )
}
AddCategory.protoTypes={
  setCategories: PropTypes.func.isRequired
  }
