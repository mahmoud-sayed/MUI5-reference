import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
const skill = { id: '', number: '' };
const skills = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const MuiAutoComplete = () => {

  const [value, setValue] = useState(null);
  const [skil, setSkil] = useState({});

  console.log(value);

  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    number: skill
  }));
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        freeSolo //this Item used for search to It can accept any input value
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        value={skil}
        onChange={(event, newValue) => setSkil(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;