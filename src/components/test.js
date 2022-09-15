import React, { useState } from 'react';
import { Box, Menu, MenuItem, Button } from '@mui/material';


const Test = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorElement(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorElement(null);
    setOpen(null);
  };
  return (
    <Box>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Open</Button>
      <Menu anchorEl={anchorElement} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );

};

export default Test;