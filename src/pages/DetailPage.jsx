import "./DetailPage.css"
import React, { useContext, useState } from 'react'
import { PokeContext } from '../Context'
import { NavLink, useParams } from 'react-router-dom';

const DetailPage = () => {
  // Daten aus globalem Fetch bekommen
  const {data} = useContext(PokeContext);
  const {id} = useParams();
  const pokemon =data[id];

  // TYPE COLORS
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

  // MOVEMENTS
  const [unfold, setUnfold] = useState(false)


  return (
    <section className='detailPage'>
      <NavLink to={"/"}>🔙</NavLink>

{data ? (
  <article>
    {/* IMAGE */}
    <div className='detailImg'>
        {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`${pokemon.name}-Image`} /> */}
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}-Image`} />
        <div className='detailYellowBackground'></div>
    </div>

    {/* NAME AND ID */}
    <h2 className='detailPokeName'>{"#" + ("000" + (pokemon.id)).slice(-3)} {pokemon.name}</h2>

    {/* TYPE */}
    <article className="detailTypeArticle">
    {pokemon?.types.map((singleType, i) => {
      return(
        <div key={i}
        style={{backgroundColor: typeColors[singleType.type.name]}}>
          {singleType.type.name.toUpperCase()}
          </div>
      )
    })}
    </article>

    {/* ABILITIES */}
    <h3 className="detailH3">ABILITIES</h3>
    {pokemon?.abilities.map((singleAbility, i) => <div key={i}>{singleAbility.ability.name.toUpperCase()}</div>)}

    {/* MOVEMENT ==UNFOLD== */}
    <div className='movementsClickDiv' onClick={() => setUnfold(!unfold)}>
    <h3 className="detailH3">MOVEMENTS {unfold ? "-" : "+"}</h3>
    </div>
    {unfold ? 
    <p>{pokemon?.moves.map((singleMove, i) => <div key={i}>{singleMove.move.name.toUpperCase()}</div>)} </p> : "" }
  

   

  </article>
) : (
  // Loading display
<p>Loading...</p>
)}
      
    
    </section>
  )
}

export default DetailPage