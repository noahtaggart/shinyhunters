import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HuntCard } from './HuntCard'
import { getOngoingUserHunts } from './HuntManager'

export const CurrentHunts = () => {
    const [allHunts, setHunts] = useState([])


    useEffect(() => {
        getOngoingUserHunts()
            .then(setHunts)
    }, []
    )

    const styledLink = {
    color: "black",
    textDecoration: "none"}
    
    
    return <>
        <Link  to='/new-hunt'>New Hunt</Link>
        {allHunts.length >= 1 ?
            allHunts.map((hunt) => {

                    return <>
                    <Link style={styledLink}className='CurrentHuntLink' to={`/current-hunts/${hunt.id}`}>
                    <HuntCard hunt={hunt} />
                    </Link>
                    
                    </>
                })
            :
            <p>This user has no ongoing hunts</p>
                
            }

        
    </>

}