import { Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <Typography variant="h1">404</Typography>
      <Typography>Lehte ei leitud!</Typography>
      <Link to="/">Tagasi avalehele</Link>
    </>
  )
}

export default Error
