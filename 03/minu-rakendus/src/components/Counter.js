import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@mui/material"

// rafcp

const Counter = props => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => setCounter(counter + 1)

  //ilma dependency array-ta
  useEffect(() => {
    document.title = `Martini loendur: ${counter}`
  })

  //tühja dependency array-ga - käivitub üks kord
  useEffect(() => {
    console.log("Mitu korda")
  }, [])

  //täidetud dependency array-ga - dependency muutuse korral
  useEffect(() => {
    console.log("Mitu korda koos dependencyu'ga")
  }, [counter])

  return (
    <Button
      color="success"
      variant="contained"
      onClick={increaseCounter}
    >
      +1
    </Button>
  )
}

Counter.propTypes = {}

export default Counter
