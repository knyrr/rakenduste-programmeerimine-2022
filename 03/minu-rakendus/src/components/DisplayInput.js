import React, { useState } from "react"
import { Box, Button, Input, Typography } from "@mui/material"

// Lisaks luua ka komponent, mis kuvab input elementi (kasutada MUI elementi, mitte HTML oma). Samuti kirjutades input elementi kuvaks value eraldi välja ehk kasutada onChange propi ja vihjeks võib öelda, et tuleb kasutada event.target.value -d, mida esimesel tunnil kordasime.
export const DisplayInput = () => {
  const [value, setValue] = useState("")
  const handleChange = e => setValue(e.target.value)
  const handleClick = () => setValue("")

  return (
    <>
      <Box
        sx={{
          flexDirection: "row"
        }}
      >
        <Input
          type="text"
          onChange={handleChange}
          value={value}
        />
        <Button
          onClick={handleClick}
          variant="contained"
        >
          Tühjenda
        </Button>
      </Box>

      <Typography>Väärtus: {value}</Typography>
    </>
  )
}
