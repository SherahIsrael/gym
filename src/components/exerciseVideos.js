import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const exerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: '#14A44D', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) =>
          <a
            key={index}
            className='exercise-video'
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="000">
                  {item.video.title}
                </Typography>
              </Box>
            </a>
        )}
      </Stack>
    </Box>
  )
}

export default exerciseVideos