// Links
import React from 'react' 
import { Stack, Typography } from '@mui/material';

// Gym icon from https://icons8.com
import Icon from '../assets/icons/gym.png'

// BodyPart Boxes
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid ##14A44D' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behaviour: 'smooth'})
      }}
    >
        <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold" color="3A1212"
        textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart