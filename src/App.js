import { useState } from 'react';
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {
  const [categories,setCategories]= useState([])
  return (
    <div className="App">
      <h2> GifExpertApp</h2>

      <AddCategory  setCategories={setCategories}/>
      <ul>
        {
          // categories.map((categorie,index)=> <li key={index} >{categorie}</li>)
          categories.map((categorie)=> <GifGrid  
          key ={categorie} 
          category={categorie}/>)
          }
      </ul>
    </div>
  );
}

export default App;
