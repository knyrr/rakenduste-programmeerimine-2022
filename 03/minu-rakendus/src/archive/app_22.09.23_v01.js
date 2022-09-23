import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
//import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"
import Counter from "./components/Counter"
import Toggle from "./components/Toggle"

function App() {
  const [show, setShow] = useState(true)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        height: "100vh"
      }}
    >
      <Counter />
      {show && <Toggle />}
      <Button
        color="error"
        variant="contained"
        onClick={() => setShow(!show)}
      >
        Toggle
      </Button>
    </Box>
  )
}

export default App
