import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TrainerCard } from './TrainerCard'
import { getTrainer } from './TrainerManager'

export const SingleTrainer = () => {
    const [trainer, setTrainer] = useState()
    const {trainerId} = useParams()


    useEffect(() => {
        getTrainer(parseInt(trainerId))
            .then(setTrainer)
    }, [trainerId]
    )
    
    
    return <>
        <TrainerCard trainer={trainer} />
    </>

}