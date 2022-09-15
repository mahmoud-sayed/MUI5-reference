import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const MuiSelect = () => {
  const [country, setCountry] = useState({
    country: []
  });
  console.log(country);
  return (
    <Box width='250px'>
      <TextField
        label='select Country'
        select value={country.country}
        onChange={(e) => setCountry({ country: e.target.value === 'string' ? e.target.value.split(',') : e.target.value })}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value='IN'>india</MenuItem>
        <MenuItem value='US'>US</MenuItem>
        <MenuItem value='AU'>Austraia</MenuItem>
      </TextField>
    </Box >
  );
};

export default MuiSelect;