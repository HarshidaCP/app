import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const welcome = () => {
  const [name, aName] = useState()
  
  const angu = () => {
    aName("Angular")
  }
  const react = () => {
    aName("React")
  }
  const view = () => {
    aName("View")
  }
  useEffect  (() => {
    angu ()
   }, [])
  return (
      <div>
      <Typography variant="h4" > welcome {name}</Typography> <br/>&nbsp;
      <Button variant='contained' onClick={angu}>Angular </Button>&nbsp;
      <Button variant='contained' onClick={react}>React </Button>&nbsp;
      <Button variant='contained' onClick={view}>View </Button>&nbsp;
    </div>
  )
}

export default welcome