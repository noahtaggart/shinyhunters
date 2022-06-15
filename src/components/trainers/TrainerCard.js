import React, { useContext, useRef, useState } from 'react'
import { TrainerStateContext } from '../contexts/TrainerStateContext'
import { UserContext } from '../contexts/UserContext'
import { createPhoto, newSubscribe, removeSub } from './TrainerManager'
import trainerred from '../images/trainerred.webp'
import Settings from '../repositories/Settings'
import { Link } from 'react-router-dom'

export const TrainerCard = ({ trainer, edit }) => {
    const { currentUser } = useContext(UserContext)
    const {trainerState, setTrainerState } = useContext(TrainerStateContext)
    const bio = useRef()
    const username = useRef()
    const [base64ImageState, setBase64ImageState] = useState()
    const [changePic, setChangePic] = useState(false)

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
            setBase64ImageState(base64ImageString)
    
            // Update a component state variable to the value of base64ImageString
        });
    }


    const uneditable = () => {
        return (<>
        
        
        {trainer ? 
            <div key={`trainerNumber--${trainer.id}`} className='TrainerCard'>
                <div className='TrainerImageBlock'>
                    {trainer.profileImageUrl.photo === null? <img className='PokemonTrainerImage' src={trainerred} alt={'default trainer image'} height='150'/>:
                    <img className='PokemonTrainerImage' src={`${Settings.remoteURL}${trainer.profileImageUrl.photo}`} height='150' alt={`${trainer.user.username} profile image`}/>
                    }
                    <div className='TrainerUsername'><Link to={`/trainers/${trainer.user.id}`}>{trainer.user.username}</Link>
                    </div>
                    <div className='TrainerBio'>{trainer.bio}</div>
                    {trainer.id === currentUser.id ? "" :
                    <>
                        {trainer.is_subscribed === false ?
                        <button onClick={() => newSubscribe(trainer.id).then(() =>setTrainerState(true))}>Subscribe</button>
                    : <button onClick={()=> removeSub(trainer.id).then(() =>setTrainerState(true))}>Unsubscribe</button>}</>}
                </div>
                {trainer.recent_completed_hunt != null ?
                <>
                <div className='TrainerRecentCompletedHunt'>
                    Pokemon: {trainer.recent_completed_hunt.pokemon.name} #{trainer.recent_completed_hunt.pokemon.id}
                </div>
                <div className='TrainerRecentCompletedHuntImage'>
                    <img src={trainer.recent_completed_hunt.pokemon.default_sprite} alt={trainer.recent_completed_hunt.pokemon.name}/>
                </div>
                </>
                :<p>{trainer.user.username} has no completed hunts yet</p>}
            </div>:""}

        </>)
    }

    const editable = () => {
        return (
            <>
                <form className='TrainerImageBlock'>
                {trainer.profileImageUrl.photo === null? <img className='PokemonTrainerImage' src={trainerred} alt={'default trainer image'} height='150'/>:
                    <img className='PokemonTrainerImage' src={`${Settings.remoteURL}${trainer.profileImageUrl.photo}`} height='150' alt={`${trainer.user.username} profile image`}/>
                    }
                    {changePic === false ?
                            <button onClick={()=>setChangePic(true)}>Upload New Picture?</button>
                            : //if upload new pic has been clicked
                            
                            <><input type="file" id="trainer_image" onChange={createImageString} />
                            <button onClick={() => {
                                const photoObject = {}
                                photoObject.trainer_image = base64ImageState
                                photoObject.trainer_id = currentUser.id
                                createPhoto(photoObject).then(() => setBase64ImageState(undefined))

                            }}>Upload</button>
                            
                            </>}
                            <br></br>
                    <input ref={username} type='text' name='username' value={trainer.user.username}/>
                    <br></br>
                    

                    <textarea ref={bio} type='bio' className='TrainerBio'>{trainer.bio}</textarea>.

                    {trainer.id === currentUser.id ? "" :
                    <>
                        {trainer.is_subscribed === false ?
                        <button onClick={() => newSubscribe(trainer.id).then(() =>setTrainerState(true))}>Subscribe</button>
                    : <button onClick={()=> removeSub(trainer.id).then(() =>setTrainerState(true))}>Unsubscribe</button>}</>}
                </form>
                {trainer.recent_completed_hunt != null ?
                <>
                <div className='TrainerRecentCompletedHunt'>
                    Pokemon: {trainer.recent_completed_hunt.pokemon.name} #{trainer.recent_completed_hunt.pokemon.id}
                </div>
                <div className='TrainerRecentCompletedHuntImage'>
                    <img src={trainer.recent_completed_hunt.pokemon.default_sprite} alt={trainer.recent_completed_hunt.pokemon.name}/>
                </div>
                </>
                :<p>{trainer.user.username} has no completed hunts yet</p>}
            

            </>
        )
    }



    return (
        <>
        {edit === true ? editable() : uneditable()}
        </>
    )
}