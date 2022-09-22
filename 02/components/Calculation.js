import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
// Mõtteks võib olla mingisugune arvutus, kus oleksid nupud -1, +1, -100, +100 ehk need muudaksid state-is olevat numbrit. Kasutada useState-i ja luua 4 nuppu.



export const Calculation = () => {
    const [value, setValue] = useState(0)

    return (
        <>
            <Typography variant="h1">{value}</Typography>
            <Box
                sx={{
                    flexDirection: 'row',
                }}
            >  
                <CalcButton value={value} setValue={setValue} changeBy={-1}/>
                <CalcButton value={value} setValue={setValue} changeBy={1}/>
                <CalcButton value={value} setValue={setValue} changeBy={-100}/>
                <CalcButton value={value} setValue={setValue} changeBy={100}/>
            </Box>
        </>
    )
}

const CalcButton = ({ value, setValue, changeBy }) => {
    return (
      <Button onClick={() =>setValue(value + changeBy)}>
          {changeBy>=0 ? '+'+changeBy : changeBy}
      </Button>
    )
}
