import React from "react"
import { Route } from "react-router-dom"
import { AllHunts } from "./hunts/AllHunts"

export const ApplicationViews = () => {
    return <>
        <Route exact path='/'>
            <AllHunts />
        </Route>
    </>
}
