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
    <section>
      <h2>ItemPreview</h2>
      <div className='pokemon-container'>
        {pokemonData.map((pokemon, index) => (
          <p key={index}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>#0{pokemon.id} </span>
            
            <span>{pokemon.name}</span>
           
          </p>
        ))}
      </div>
    </section>
  );
};

export default ItemPreview;
