import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const State1 = () => {
  var [fname, setFname] = useState('Appu');
  var [val, setVal] = useState();

  const handleInput = (e) => {
    console.log(e.target.value);
    setFname(e.target.value);  
  }
   const submitHandler = () => {
     console.log("clicked");
     setVal(fname);
  }
    
  return (
      <div>
          <Typography variant='h3'>welcome {val}</Typography>  
          <TextField variant='outlined' label="your name" onChange={handleInput} /><br></br><br></br>
          <Button variant='contained' onClick={submitHandler}>Submit </Button>
    </div>
  )
}

export default State1