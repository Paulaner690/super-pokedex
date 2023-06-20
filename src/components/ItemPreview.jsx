import React, { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../Context';
import { Link } from 'react-router-dom';
import "../assets/css/itempreview.css"

const ItemPreview = () => {
  const { data, setData } = useContext(PokeContext);

  return (
    <section>
      {data ? (
        <div className='pokemon-grid'>
          {data.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.id}`} key={index}>
              <div className='pokemon-container'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className='white-stripe'>
                <span>#0{pokemon.id} </span>
                <span>{pokemon.name}</span>
                </div>
            </Link>
          ))}
        </div>
      
      ): 
      (<h2>No data</h2>)}
      
    </section>
  );
};

export default ItemPreview;