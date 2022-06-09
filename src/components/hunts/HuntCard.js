import React from 'react'

export const HuntCard = ({hunt}) => {

    return (
    
        <>
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
                <div className='HuntTrainerBlock'>
                    caught by {hunt.trainer.user.username} in  {hunt.game.title} using the {hunt.method.name} method
                </div>
            </div>
        </>
    )
}