import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { HuntStateContext } from '../contexts/HuntStateContext'

import { addEncounter, completeHunt, getSingleHunt } from './HuntManager'

export const SingleHunt = () => {
    const [hunt, setHunt] = useState()
    const { huntId } = useParams()
    const { huntState, setHuntState } = useContext(HuntStateContext)
    const history = useHistory()


    useEffect(() => {
        getSingleHunt(huntId)
            .then(setHunt)
    }, [huntId, huntState]
    )

    useEffect(() => {
        window.addEventListener('keypress', (e) => {
            if (e.key === ' ') {
                addEncounter(huntId).then(() => setHuntState(true))
            }
        })

        return () => {
            window.removeEventListener('keypress', (e) => {
                if (e.key === ' ') {
                    addEncounter(huntId).then(() => setHuntState(true))
                }
            })
        }
    }, [])



    return (
        <> {hunt ?
            <>
                <div className='HuntListBlock'>
                    <div className='SingleHunt'>
                        <div key={`huntNumber--${hunt.id}`} className='HuntCard' onClick={() => addEncounter(huntId).then(() => setHuntState(true))}
                        >
                            <div className='HuntImageBlock'>
                                <div className='PokemonHuntImage'><img src={hunt?.pokemon.default_sprite} />
                                </div>
                                <div className='PokemonHuntSpecies'>{hunt.pokemon.name}
                                </div>
                            </div>
                            <div className='HuntEncounterBlock'>
                                <div className='NumberOfEncounters'>
                                    Number of Encounters - {hunt.encounters}
                                </div>
                                {hunt.shiny_charm === true ?
                                    <div className='HuntOdds'>

                                        Hunt Odds: {hunt.method.shiny_charm_odds_fraction}  </div>
                                    :
                                    <div className='HuntOdds'>

                                        Hunt Odds: {hunt.method.default_odds_fraction}  </div>
                                }
                            </div>
                            <button onClick={() => completeHunt(huntId).then(() => history.push('/collection'))}>Caught!</button>
                        </div></div>
                </div>
            </>
            : ""}

        </>)

}