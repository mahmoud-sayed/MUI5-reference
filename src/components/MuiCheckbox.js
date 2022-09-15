
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const MuiCheckbox = () => {
  const [terms, setTerms] = useState(false);
  const [skills, setSkills] = useState([]);



  const handelChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter(skill => skill !== e.target.value));
    }
  };

  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={<Checkbox checked={terms} onChange={(e) => setTerms(!terms)} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          value={terms}
          onChange={(e) => setTerms(!terms)}
        />
      </Box>
      <Box>
        <FormControl >
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              value='html'
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  onChange={handelChange}
                />}
            />
            <FormControlLabel
              label='CSS'
              value='css'
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handelChange}
                />}
            />
            <FormControlLabel
              label='JS'
              value='js'
              control={
                <Checkbox checked={skills.includes('js')}
                  onChange={handelChange}
                />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;