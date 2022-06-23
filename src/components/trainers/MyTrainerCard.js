import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { TrainerCard } from './TrainerCard'
import { getTrainer } from './TrainerManager'

export const MyTrainerCard = () => {
    const [trainer, setTrainer] = useState()
    const { currentUser } = useContext(UserContext)
    const [editCard, setEditCard] = useState(false)



    useEffect(() => {
        getTrainer(currentUser.id)
            .then(setTrainer)
    }, [currentUser]
    )


    return <>
        {editCard === false ? 
        <button className='EditButton' onClick={() => setEditCard(true)}>Edit</button>
        :
        <button className='EditButton' onClick={() => setEditCard(false)}>Done Editing</button>}
        <TrainerCard trainer={trainer} edit={editCard} />
    </>

}