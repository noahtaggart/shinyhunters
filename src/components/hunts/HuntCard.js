import React, { useState, useEffect } from 'react'

export const HuntCard = (hunt) => {
    const [shinyCharmOdds, setShinyCharmOdds] = useState()
    const [defaultOdds, setDefaultOdds] = useState()

    useEffect(() => {
    var Fraction = require('fractional').Fraction
    .then(setShinyCharmOdds(new Fraction(hunt?.method.shiny_charm_odds)).toString())
    .then(setDefaultOdds(new Fraction(hunt?.method.default_odds)).toString())
    }, [hunt])


    return (
    
        <>
            <div key={`huntNumber--${hunt.id}`} className='huntCard'>
                <div className='HuntImageBlock'>
                    <div className='PokemonHuntImage'><img src={hunt.pokemon.default_sprite} />
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
                        
                        Hunt Odds: {shinyCharmOdds}  </div>
                        :
                        <div className='HuntOdds'>
                        
                        Hunt Odds: {defaultOdds}  </div>
                        }                    
                </div>
                <div className='HuntTrainerBlock'>
                    caught by {hunt.trainer.user.username}
                    in {hunt.game.title} using the {hunt.method.name} method
                </div>
            </div>
        </>
    )
}