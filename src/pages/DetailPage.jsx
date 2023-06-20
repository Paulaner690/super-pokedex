import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokeContext } from '../Context';

const DetailPage = () => {
  const { data } = useContext(PokeContext);
  const { id } = useParams();
  const pokemon =  data[id];

  return (
    <div>
      <h2> Name: {pokemon.name}</h2>
      <h2> Id: {pokemon.id}</h2>
    </div>
  )
}

export default DetailPage