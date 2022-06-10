import React, { useState, useEffect } from 'react'
import { TrainerCard } from './TrainerCard'
import { getAllTrainers } from './TrainerManager'

export const AllTrainers = () => {
    const [allTrainers, setTrainers] = useState([])


    useEffect(() => {
        getAllTrainers()
            .then(setTrainers)
    }, []
    )
    
    
    return <>
  
        {allTrainers.map((trainer) => {
          
            return <TrainerCard trainer={trainer} />})}

    </>

}