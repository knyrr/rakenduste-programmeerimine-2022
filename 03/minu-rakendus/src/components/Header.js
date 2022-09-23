import React from "react"
import { Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <Typography className="app-name">Martini rakendus</Typography>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          end
        >
          Main
        </NavLink>
        <NavLink
          to="/contact-form"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact form
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          List
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          User
        </NavLink>
        <NavLink
          to="/profile-settings"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Profile settings
        </NavLink>
      </nav>
    </>
  )
}

export default Header
