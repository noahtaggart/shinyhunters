import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TrainerStateContext } from '../contexts/TrainerStateContext'
import { TrainerCard } from './TrainerCard'
import { getTrainer } from './TrainerManager'

export const SingleTrainer = () => {
    const [trainer, setTrainer] = useState()
    const {trainerId} = useParams()
    const {trainerState, setTrainerState } = useContext(TrainerStateContext)



    useEffect(() => {
        getTrainer(parseInt(trainerId))
            .then(setTrainer)
    }, [trainerId, trainerState]
    )
    
    
    return <>
        <TrainerCard trainer={trainer} />
    </>

}