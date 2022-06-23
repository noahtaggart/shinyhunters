import React, { useState, useEffect, useContext } from 'react'
import { TrainerStateContext } from '../contexts/TrainerStateContext'
import { TrainerCard } from './TrainerCard'
import { getAllTrainers, searchTrainers } from './TrainerManager'

export const AllTrainers = () => {
    const [allTrainers, setTrainers] = useState([])
    const {trainerState } = useContext(TrainerStateContext)
    const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {
        if (searchTerm){
            searchTrainers(searchTerm)
                .then(setTrainers)
        }
        else if (searchTerm === "" ) {
            getAllTrainers()
            .then(setTrainers)
        }
    }, [trainerState, searchTerm]
    )
    
    
    
    return <>
            <br></br>
            <div className='usernameSearch'>
                <input type="text"
                className='form-control'
                placeholder='Trainer username...' onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}/>
                
            </div>
    <div className='TrainerListBlock'>

        {allTrainers.map((trainer) => {
            
            return <TrainerCard trainer={trainer} />})}

            </div>
    </>

}