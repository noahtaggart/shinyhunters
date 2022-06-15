import React, { useState, useEffect } from 'react'
import { HuntCard } from './HuntCard'
import { getCompletedUserHunts, sortHunts } from './HuntManager'

export const Collection = () => {
    const [allHunts, setHunts] = useState([])
    const [sortBy, setSortBy] = useState(0)


    useEffect(() => {
        if (sortBy) {
            sortHunts(sortBy)
                .then(setHunts)
        }
        else if (sortBy === 0)
        getCompletedUserHunts()
            .then(setHunts)
    }, [sortBy]
    )


    return <>
        <select className='sortCategory' onChange={e => {
            setSortBy(e.target.value)
        }}>
            <option hidden value={0}>Sort by...</option>
            <option value={"dexasc"}>Pokedex ▲</option>
            <option value={"dexdesc"}>Pokedex ▼</option>
            <option value={"pokeasc"}>Name ▲</option>
            <option value={"pokedesc"}>Name ▼</option>
            <option value={"complete_date_asc"}>Date Completed ▲</option>
            <option value={"complete_date_desc"}>Date Completed ▼</option>
            <option value={"start_date_asc"}>Date Started ▲</option>
            <option value={"start_date_desc"}>Date Started ▼</option>

        </select>
        {allHunts.length >= 1 ?
            allHunts.map((hunt) => {

                    return <HuntCard hunt={hunt} />
                })
            :
            <p>This user has no completed hunts</p>
                
            }

        
    </>

}