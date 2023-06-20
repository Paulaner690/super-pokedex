import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../Context'
import TypeButton from './TypeButton';
import "../assets/css/typeselector.css"

const TypeSelector = (props) => {
  const { data } = useContext(PokeContext);
  const [recordedTypes, setTypes] = useState([]);

 const typeColors = {
    grass: '#57921C',
    poison: '#AB00AE',
    fire: '#FF9900',
    flying: '#CCDADD',
    water: '#00A0E4',
    bug: '#3BB900',
    normal: '#B3B3B3',
    electric: '#FFE600',
    ground: '#965A00',
    fairy: '#FFC2F9',
    dark: '#1C1C1C',
    dragon: '#00458A',
    fighting: '#E40000',
    ghost: '#5A1E64',
    ice: '#6AD2FF',
    plant: '#70DF00',
    psychic: '#FF81F2',
    rock: '#E1B237',
    steel: '#2A4950'
  };

  useEffect(() => {
    if (data) {
      let types = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].types) {
          for (let j = 0; j < data[i].types.length; j++) {
            let type = data[i].types[j]?.type?.name;
            if (type) {
              let typeStatus = types.includes(type);
              if (!typeStatus) {
                types.push(type);
              }
            }
          }
        }
      }
      setTypes(types);
    }
  }, [data]);
  

  console.log({recordedTypes});

  return (
    <div className='types-grid'>
            <button className='close-btn' onClick={() => props.close(false)}>X</button>
      <div className='btn-container'>
      {recordedTypes.map((type, index) => (
        <TypeButton key={index} color={typeColors[type]} type={type} typeName={type.toUpperCase()}/>
      ))}
    </div>
    </div>
  )
}

export default TypeSelector