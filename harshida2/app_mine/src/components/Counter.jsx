import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [val,setVal]= useState(0)
    
    const submitHandler= () => {
        setVal(val+1)   
    }
    const takeInput = () => {
        setVal(val-1)
    }
  return (
      <div>
          <Typography variant='h4' >Count numbers: {val }</Typography><br/>
          <Button variant='contained' onClick={submitHandler}>Add </Button>&nbsp;
          <Button variant='contained' onClick={takeInput}>Substract </Button>
    </div>
  )
}

export default Counter