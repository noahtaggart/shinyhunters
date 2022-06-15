import React from "react"
import { Route } from "react-router-dom"
import { AllHunts } from "./hunts/AllHunts"
import { CurrentHunts } from "./hunts/CurrentHunts"
import { Collection } from "./hunts/MyCollection"
import { NewHunt } from "./hunts/NewHunt"
import { SingleHunt } from "./hunts/SingleHunt"
import { Subscriptions } from "./hunts/Subscriptions"
import { AllTrainers } from "./trainers/AllTrainers"
import { MyTrainerCard } from "./trainers/MyTrainerCard"
import { SingleTrainer } from "./trainers/SingleTrainer"

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
        <Route exact path='/trainers/:trainerId(\d+)'>
            <SingleTrainer />
        </Route>
        <Route exact path='/personal-trainer-card'>
            <MyTrainerCard />
        </Route>
        <Route exact path='/collection'>
            <Collection />
        </Route>
        <Route exact path='/current-hunts'>
            <CurrentHunts />
        </Route>
        <Route exact path='/new-hunt'>
            <NewHunt />
        </Route>
        <Route exact path='/current-hunts/:huntId(\d+)'>
            <SingleHunt />
        </Route>
    </>
}
