import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia component='img' height='140px' image='https://source.unsplash.com/random' alt='unsplash image' />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            hello World! hello World!hello World!hello
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            hello World! hello World!hello World!hello World!hello World!hello World!hello World!hello World!hello World!hello World!hello World!hello World!hello World!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>share</Button>
          <Button size='small'>learn more</Button>

        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;