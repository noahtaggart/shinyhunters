import React from 'react'

export const TrainerCard = ({ trainer }) => {

    return (

        <>
            <div key={`trainerNumber--${trainer.id}`} className='TrainerCard'>
                <div className='TrainerImageBlock'>
                    {/* <div className='PokemonTrainerImage'><img src={trainer?.profilePic} />
                    </div> */}
                    <div className='TrainerUsername'>{trainer.user.username}
                    </div>
                    <div className='TrainerBio'>{trainer.bio}</div>
                    <button>Subscribe!</button>
                </div>
                {trainer.recent_completed_hunt != null ?
                <>
                <div className='TrainerRecentCompletedHunt'>
                    Pokemon: {trainer.recent_completed_hunt.pokemon.name} #{trainer.recent_completed_hunt.pokemon.id}
                </div>
                <div className='TrainerRecentCompletedHuntImage'>
                    <img src={trainer.recent_completed_hunt.pokemon.default_sprite} />
                </div>
                </>
                :<p>{trainer.user.username} has no completed hunts yet</p>}
            </div>
        </>
    )
}