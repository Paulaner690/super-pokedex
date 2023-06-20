import React, { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../Context';
import { Link } from 'react-router-dom';

const ItemPreview = () => {
  const { data, setData } = useContext(PokeContext);

  return (
    <section>
      {data ? (
        <div>
          {data.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.id}`} key={index}>
              <div className='pokemon-container'>
              <p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <span>#0{pokemon.id} </span>
                <span>{pokemon.name}</span>
              </p>
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