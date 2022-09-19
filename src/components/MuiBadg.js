import React from 'react';
import { Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiBadg = () => {
  return (
    <Stack spacing={2} direction='row' m={8}>
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='primary' zeroShow>
        <MailIcon color='primary' />
      </Badge>
      <Badge badgeContent={800} color='primary' max={999}>
        <MailIcon />
      </Badge>
      <Badge variant='dot' color='primary'>
        <MailIcon />
      </Badge>
    </Stack >
  );
};

export default MuiBadg;