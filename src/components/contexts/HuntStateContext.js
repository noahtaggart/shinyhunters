import React, {createContext, useState, useEffect} from 'react';
import Settings from '../repositories/Settings';

export const HuntStateContext = createContext();

export const HuntStateProvider = ({children}) => {
    const [huntState, setHuntState] = useState(false)


    useEffect(() => {
        if (huntState === true) {
            setHuntState(false)
        }
    },[huntState])

    return (
        <HuntStateContext.Provider value={{huntState, setHuntState}}>
            {children}
        </HuntStateContext.Provider>
    )



}
