import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';

const MuiRadioButtons = () => {
  const [value, setValue] = useState('');
  return (
    <Box>
      <FormControl error>
        <FormLabel id='job-experience-groupe-label'>
          Years of Experience
        </FormLabel>
        <RadioGroup
          name='job-experience-groupe'
          aria-labelledby='job-experience-groupe-label'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          row
        >
          <FormControlLabel control={<Radio color='success' />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio size='medium' color='error' />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio size='small' color='primary' />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText> invalid value</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButtons;