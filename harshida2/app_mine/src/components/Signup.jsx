import { TextField, Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Signup</h1>
          <TextField label="First Name" variant="outlined"/><br/><br/>
          <TextField label="Last Name" variant="outlined"/><br/><br/>
          <TextField label="e-mail id" variant="outlined"/><br/><br/>
          <TextField label="Password" variant="filled" /><br></br><br></br>
          <TextField label="Conform Password" variant="filled" /><br></br><br></br>
          <Button variant="contained">Signup</Button> 
    </div>
  )
}

export default Signup