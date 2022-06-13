import React, {createContext, useState, useEffect} from 'react';
import Settings from '../repositories/Settings';

export const TrainerStateContext = createContext();

export const TrainerStateProvider = ({children}) => {
    const [trainerState, setTrainerState] = useState(false)


    useEffect(() => {
        if (trainerState === true) {
            setTrainerState(false)
        }
    },[trainerState])

    return (
        <TrainerStateContext.Provider value={{trainerState, setTrainerState}}>
            {children}
        </TrainerStateContext.Provider>
    )



}
