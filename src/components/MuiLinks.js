import { Link, Stack, Typography } from '@mui/material';
import React from 'react';

const MuiLinks = () => {
  return (
    <Stack spacing={2} direction='row'>
      <Link href='#' variant='h2'>Link</Link>
      <Typography variant='h6'>
        <Link href='#' color='secondary' underline='none'> Link 2</Link>
      </Typography>
    </Stack >
  );
};

export default MuiLinks;