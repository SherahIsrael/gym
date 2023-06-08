import React from 'react'
import { Box, Typography, Button } from '@mui/material';



const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} p="20px" alignItems={ "center" }>
        <Typography color="#14A44D"
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'} }}
        mb="23px" mt="30px">
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" 
        LineHeight="35px" mb={4}>
            Check out some exercises
        </Typography>
        <Button variant="contained"
        color="success" href="#Exercise"
        sx={{ backgroundColor: '#14A44D',
        padding: '10px'}}>Explore Exercises</Button>
        <Typography
            fontWeight={600}
            color="#14A44D"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>
    </Box>
  )
}

export default HeroBanner