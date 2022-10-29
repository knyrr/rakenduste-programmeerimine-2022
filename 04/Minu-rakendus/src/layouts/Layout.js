import React, { useContext } from "react"
import { UserContext } from "../App"
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useNavigate, NavLink } from "react-router-dom"

const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogOut = () => {
    setCurrentUser(null)
    const localUser = { name: null, token: null }
    sessionStorage.setItem("user", JSON.stringify(localUser))
    navigate("/")
  }

  return (
    <>
      <AppBar sx={{ position: "static", height: "10%", zIndex: "auto" }}>
        <Toolbar>
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              listStyle: "none",
              gap: "20px",
            }}
          >
            <Box component="li">
              <NavLink to="home">Main</NavLink>
            </Box>
            {currentUser ? (
              <>
                <Box component="li">
                  <NavLink to="todo">Todos</NavLink>
                </Box>
                <Box component="li">
                  <Typography>Welcome {currentUser.name}</Typography>
                </Box>
                <Box component="li">
                  <NavLink sx={{ color: "black" }} onClick={handleLogOut}>
                    Logout
                  </NavLink>
                </Box>
              </>
            ) : (
              <Box component="li">
                <NavLink to="login">Login</NavLink>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default Layout
