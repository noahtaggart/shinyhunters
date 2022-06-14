import React, { useState, useEffect } from 'react'
import { getAllGames } from '../games/GameManager'
import { getAllMethods } from '../methods/MethodManager'
import { getAllPokemon } from '../pokemon/PokemonManager'

export const NewHunt = () => {
    const [newHunt, setNewHunt] = useState({pokemon:null})
    const [pokemon, setPokemon] = useState([])
    const [games, setGames] = useState([])
    const [methods, setMethods] = useState([])

    useEffect(()=> {
        getAllPokemon()
        .then(setPokemon)
        .then(()=>(getAllGames().then(setGames)
        ))
        .then(()=>(getAllMethods().then(setMethods)
        ))
    }, [])


    return (
        <>
        <form>
            <h3>
                Hunt Setup
            </h3>
            
            {newHunt.pokemon !=null ? 
                
            <div className='PokemonImage'>
                <img src={(pokemon.find(poke => poke.id === newHunt.pokemon)).default_sprite} alt={pokemon.name}/>
            </div>:""}

            <fieldset>
                <label htmlFor='pokemon'>Pokemon</label>
                <select name='pokemon' required defaultValue={0} onChange={(e) => {
                    const copy = {...newHunt}
                    copy.pokemon = parseInt(e.target.value)
                    setNewHunt(copy)
                }}>
                    <option value="0" disabled hidden>Select</option>
                    
                    {pokemon.map(poke => {
                        return <option key={`pokemon--${poke.id}`} value={poke.id}>{poke.name}</option>
                    })}
                    
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor='game'>Game</label>
                <select name='game' required defaultValue={0}
                onChange={(e) => {
                    const copy = {...newHunt}
                    copy.game = parseInt(e.target.value)
                    setNewHunt(copy)
                }}>

                    <option value="0" disabled hidden>Select</option>
                    {games.map(game => {
                        return <option key={`game--${game.id}`} value={game.id}>{game.title}</option>
                    })}

                </select>
            </fieldset>
            <fieldset>
                <label htmlFor='method'>Method</label>
                <select name='method' required defaultValue={0}
                onChange={(e) => {
                    const copy = {...newHunt}
                    copy.method = parseInt(e.target.value)
                    setNewHunt(copy)
                }}>

                    <option value="0" disabled hidden>Select</option>
                    {methods.map(method => {
                        return <option key={`method--${method.id}`} value={method.id}>{method.name}</option>
                    })}

                </select>
            </fieldset>
            <fieldset>
                <label htmlFor='shinycharm'>Shiny Charm</label>
                <input type='checkbox' value='ShinyCharmBox'/>
                
            </fieldset>
            
        </form>
        </>
    )




}