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
    <div className='HuntListBlock'>

    {subHunts.length >= 1?
        subHunts.map((hunt) => {
            return <HuntCard hunt={hunt} />
        })
        :<p>You're currently not subscribe to anyone</p>}
    
        </div>
    </>


}