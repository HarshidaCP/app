
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div>
         <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" > My app  </Typography> &nbsp;
            <Link to='/'>
                <Button variant='contained' color='secondary'> Signup</Button></Link> &nbsp;
            <Link to='/login'>
                <Button variant='contained' color='primary'> Login</Button></Link> &nbsp;
           <Link to="/state">
               <Button variant='contained' color='secondary'> State1</Button></Link>&nbsp;
           <Link to="/counter">
               <Button variant='contained' color='primary'> Counter</Button></Link>&nbsp;
           <Link to="/welcome">
               <Button variant='contained' color='secondary'> Welcome</Button></Link>&nbsp;
           <Link to="/api">
               <Button variant='contained' color='primary'>  Api</Button> </Link> &nbsp;
                  <Link to="/poke">
                      <Button variant='contained' color='secondary'> Pokemon</Button></Link> &nbsp;
        
            </Toolbar>
          </AppBar><br/>
    </div>
  )
}

export default Navbar