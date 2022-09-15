import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

const MuiSwitch = () => {
  const [mode, setMode] = useState(false);
  console.log(mode);
  return (
    <Box>
      <FormControlLabel
        label='dark mode'
        control={<Switch checked={mode} onChange={(e) => setMode(!mode)} size='small' color='success' />}
      />
    </Box>
  );
};

export default MuiSwitch;