import React, { useState, useEffect } from 'react'
import { HuntCard } from './HuntCard'
import { getCompletedUserHunts } from './HuntManager'

export const Collection = () => {
    const [allHunts, setHunts] = useState([])


    useEffect(() => {
        getCompletedUserHunts()
            .then(setHunts)
    }, []
    )


    return <>
        {allHunts.length >= 1 ?
            allHunts.map((hunt) => {

                    return <HuntCard hunt={hunt} />
                })
            :
            <p>This user has no completed hunts</p>
                
            }

        
    </>

}