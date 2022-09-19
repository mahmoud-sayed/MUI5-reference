import { Avatar, Chip, Stack } from '@mui/material';
import React from 'react';

const MuiChip = () => {
  return (
    <Stack spacing={1} direction='row' p={5}>
      <Chip label='chip' color='primary' size='small' />
      <Chip label='chip' variant='outlined' color='primary' size='small' avatar={<Avatar>v</Avatar>} />
      <Chip label='delete' color='error' size='small' onDelete={() => window.alert('hello')} />
    </Stack>
  );
};

export default MuiChip;