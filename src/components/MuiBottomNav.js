import { FavoriteSharp, Home, PrecisionManufacturingOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';

const MuiBottomNav = () => {
  return (
    <BottomNavigation sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
      <BottomNavigationAction label='Home' icon={<Home />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteSharp />} />
      <BottomNavigationAction label='Profile' icon={<PrecisionManufacturingOutlined />} />

    </BottomNavigation>
  );
};

export default MuiBottomNav;