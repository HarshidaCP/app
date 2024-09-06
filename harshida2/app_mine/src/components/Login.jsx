import { TextField,Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>Login</h1>
          <TextField label="Name" variant="outlined" /><br></br><br></br>
          <TextField label="Password" variant="filled" /><br></br><br></br>
          <Button variant="contained">Login</Button> &nbsp;
          <Button variant="contained">Cancel</Button>
    </div>
  )
}

export default Login