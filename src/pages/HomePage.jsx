import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { PokeContext } from '../Context'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const { data, setData } = useContext(PokeContext);
    console.log("HomePage");
    console.log({data});

  return (
    <div className='home-page'>
        <Header/>
        <Link to={"/pokemon/0"}>Details</Link>
        <div className='item-grid'>
            {data.map((pokemon, index) => (
              <div className='pokemon-card' key={index}>
                <img src={pokemon.sprites.front_shiny} alt="" />
                <article>
                  <h5>#{pokemon.id}</h5>
                  <h3>{pokemon.name}</h3>
                </article>
              </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage