import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HuntStateContext } from '../contexts/HuntStateContext'
import { UserContext } from '../contexts/UserContext'
import remove from "../images/remove.png"
import { deleteHunt } from './HuntManager'

export const HuntCard = ({hunt}) => {
    const { currentUser } = useContext(UserContext)
    const { huntState, setHuntState } = useContext(HuntStateContext)


    return (
    
        <>
        <br></br>
            {currentUser.id === hunt.trainer.id? 
            <img width={15} src={remove} alt={'remove hunt'} onClick={()=> deleteHunt(hunt.id).then(() => setHuntState(true))
            }/>
            :""}
            <div key={`huntNumber--${hunt.id}`} className='huntCard'>
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
                {hunt.completed === true ? 
                <div className='HuntTrainerBlock'>
                    caught by <Link to={`/trainers/${hunt.trainer.user.id}`}>{hunt.trainer.user.username}</Link> in  {hunt.game.title} using the {hunt.method.name} method
                    <p>Caught on {hunt.date_completed}</p>
                </div>
                :<div className='HuntTrainerBlock'>Pokemon {hunt.game.title} using the {hunt.method.name} method</div>}
            </div>
        </>
    )
}