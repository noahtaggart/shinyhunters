import React, { useState, useEffect } from 'react'
import { HuntCard } from './HuntCard'
import { getAllHunts } from './HuntManager'

export const AllHunts = () => {
    const [allHunts, setHunts] = useState([])


    useEffect(() => {
        getAllHunts()
            .then(setHunts)
    }, []
    )
    
    
    return <>
        <div className='HuntListBlock'>

        {allHunts.map((hunt) => {
            
            return <HuntCard hunt={hunt} />})}

            </div>
    </>

}