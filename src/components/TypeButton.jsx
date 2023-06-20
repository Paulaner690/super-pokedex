import React from 'react'
import { useContext } from 'react';
import { PokeContext } from '../Context';

const TypeButton = (props) => {
    const { data, setData } = useContext(PokeContext);

    const hasType = (pokemon, type) => {
        return pokemon.types.some((pokemonType) => pokemonType.type.name === type);
      };
    
      const handleTypeCheck = (selectedType) => {
        const filteredData = data.filter((pokemon) => hasType(pokemon, selectedType));
        console.log({filteredData});
        setData(filteredData);
      }

  return (
    <div onClick={() => handleTypeCheck(props.type)} className='type-btn' style={{backgroundColor: props.color}}><h4>{props.typeName}</h4></div>
  )
}

export default TypeButton