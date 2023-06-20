import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import { PokeContext, DefaultDataContext, TypeCheckContext } from './Context'


const App = () => {
const [data, setData] = useState([]);

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const basicData = await response.json();
    return basicData.results;

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {

  const fetchAndSetData = async () => {
    const dataSet = await fetchData("https://pokeapi.co/api/v2/pokemon/?limit=400")
    const pokemonDataPromises = dataSet.map(async (pokemon) => {
      return fetch(pokemon.url)                  //
        .then((response) => response.json())    // pokemonDataPromises = Array of promises
        .catch((error) => console.log(error)); //
    });

    Promise.all(pokemonDataPromises) // Wait for all promised Pokemon Object calls to resolve
      .then((pokemonData) => {
        setData(pokemonData);
      })
      .catch((error) => console.log(error));
  };


  fetchAndSetData();
}, []);

console.log({data});

  return (
    <PokeContext.Provider value={{data,setData}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/pokemon/:id' element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
    </PokeContext.Provider>
  )
}

export default App