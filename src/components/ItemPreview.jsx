import React, { useEffect, useState } from 'react';

const ItemPreview = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const promises = pokemonList.map((pokemon) =>
        fetch(pokemon.url).then((response) => response.json())
      );
      Promise.all(promises)
        .then((data) => {
          setPokemonData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [pokemonList]);

  return (
    <div className='pokemon-container'>
      <h2>ItemPreview</h2>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>#0{pokemon.id} </span>
            
            <span>{pokemon.name}</span>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemPreview;
