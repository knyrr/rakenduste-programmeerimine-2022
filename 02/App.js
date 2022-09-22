import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Calculation } from './components/Calculation.js'
import { DisplayInput } from './components/DisplayInput.js'

function App() {
  const [show,setShow] = useState(true)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px',
        height: '100vh'
      }}
    >   
      <Button 
        variant="contained" 
        color="success"
        onClick={() => setShow(!show)}
      >
        Toggle popup { JSON.stringify(show) }
      </Button>

      <MimicPopup 
        show={show} 
        setShow={setShow}
      />

      <Calculation/>
      <DisplayInput/>


    </Box>
  )
}

const MimicPopup = ({ show, setShow }) => {
  return (
    <>
      { show &&
        <>
          <Typography>
            Showing popup
          </Typography>
          <Button 
            variant="contained" 
            color="success"
            onClick={() => setShow(false)}
          >
            Hide popup
          </Button>
        </>
      }
    </>
  )
}

export default App;
