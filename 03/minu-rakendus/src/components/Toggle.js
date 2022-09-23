import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Typography } from "@mui/material"
//mport { cleanup } from "@testing-library/react"

const Toggle = props => {
  const handleKeyDown = e => console.log(e.code)
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      //cleanup

      //return puhastab
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return <Typography>Key event listner</Typography>
}

Toggle.propTypes = {}

export default Toggle
