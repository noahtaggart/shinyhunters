import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "../images/logo.png"

export const NavBar = () => {
  const history = useHistory()
  const navbar = useRef()
  const hamburger = useRef()

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={Logo} height="3rem" /> <h1 className="title is-4">Shine Get!</h1>
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>

      <div className="navbar-menu" ref={navbar}>
      <Link to="/">Home</Link>
      <Link to='/subscriptions'>Subscription Feed</Link>
      <Link to='/trainers'>Other Trainers</Link>
      <Link to='/personal-trainer-card'>Trainer Card</Link>
      <Link to='/collection'>Collection</Link>
      <Link to='/current-hunts'>Hunting</Link>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }</div>
    </nav>
  )
}
