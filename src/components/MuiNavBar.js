import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const MuiNavBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}
          onClick={(e) => setAnchorEl(true)}>
          POKEMON APP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
          >
            Resources</Button>
          <Button color='inherit'>contact</Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Bodcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavBar;;