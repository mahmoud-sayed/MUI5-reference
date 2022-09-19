import { Box, Drawer, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton size='large' edge='start' color='inherit' onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            Side Panel
          </Typography>
        </Box>

      </Drawer>
    </>
  );
};

export default MuiDrawer;