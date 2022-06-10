import React from "react"
import { Route } from "react-router-dom"
import { AllHunts } from "./hunts/AllHunts"
import { Subscriptions } from "./hunts/Subscriptions"
import { AllTrainers } from "./trainers/AllTrainers"

export const ApplicationViews = () => {
    return <>
        <Route exact path='/'>
            <AllHunts />
        </Route>
        <Route exact path='/subscriptions'>
            <Subscriptions />
        </Route>
        <Route exact path='/trainers'>
            <AllTrainers />
        </Route>
    </>
}
