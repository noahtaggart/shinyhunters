import React, { useState, useEffect, useContext } from 'react'
import { TrainerStateContext } from '../contexts/TrainerStateContext'
import { TrainerCard } from './TrainerCard'
import { getAllTrainers } from './TrainerManager'

export const AllTrainers = () => {
    const [allTrainers, setTrainers] = useState([])
    const {trainerState, setTrainerState } = useContext(TrainerStateContext)



    useEffect(() => {
        getAllTrainers()
            .then(setTrainers)
    }, [trainerState]
    )
    
    
    return <>
  
        {allTrainers.map((trainer) => {
          
            return <TrainerCard trainer={trainer} />})}

    </>

}