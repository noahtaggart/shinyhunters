import React, { useState, useEffect } from 'react'
import { HuntCard } from './HuntCard'
import { getHuntSubscriptions } from './HuntManager'

export const Subscriptions = () => {
    const [subHunts, setSubHunts] = useState([])

    useEffect(() => {
        getHuntSubscriptions()
            .then(setSubHunts)
    }, []
    )

    return <>
        {subHunts.map((hunt) => {
            return <HuntCard hunt={hunt} />
        })}
    
    </>


}