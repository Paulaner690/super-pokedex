import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import { PokeContext } from './Context'


const App = () => {
const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
    .then((response) => response.json())
    .then((pokeData) => setData(pokeData))
    .catch((error) => console.log(error));
  }, [])

  console.log({data});

  return (
    <PokeContext.Provider value={{data,setData}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pokemon' element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </PokeContext.Provider>
  )
}

export default App