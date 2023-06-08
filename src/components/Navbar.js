//Links 
import React from 'react'
import { Link } from 'react-router-dom';
import { Divider, Stack } from '@mui/material'

import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around" sx={{ gap: {sm: '122px',
    xs: '40px'}, mt: { sm: '32px', xs: '20px'}}}
    px="20px" >
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: '48px',
        height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      divider={<Divider orientation="vertical" flexItems />}
      alignItems="center"
      spacing={3}
      >
        <Link to="/" style={{textDecoration: 'none',
        color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none',
        color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar