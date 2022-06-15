import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserProvider } from "./contexts/UserContext"
import { TrainerStateProvider } from "./contexts/TrainerStateContext"

export const App = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return <>
                    <Route>
                        <TrainerStateProvider>
                            <UserProvider>
                                <NavBar />
                                <ApplicationViews />
                            </UserProvider>
                        </TrainerStateProvider>
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
