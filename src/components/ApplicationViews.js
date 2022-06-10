import React from "react"
import { Route } from "react-router-dom"
import { AllHunts } from "./hunts/AllHunts"
import { Subscriptions } from "./hunts/Subscriptions"

export const ApplicationViews = () => {
    return <>
        <Route exact path='/'>
            <AllHunts />
        </Route>
        <Route exact path='/subscriptions'>
            <Subscriptions />
        </Route>
    </>
}
