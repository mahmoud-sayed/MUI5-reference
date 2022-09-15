import { InputAdornment, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MuiTextField = () => {

  const [showPass, setShowPass] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Stack spacing={3} mt={3} alignItems='center'>
      <Stack direction='row' spacing={2}>
        <TextField
          variant='outlined'
          label='name'
        />
        <TextField
          variant='filled'
          label='name'
        />
        <TextField
          variant='standard'
          label='name'
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small Secondary' size='small' color='secondary' />
        <TextField label='medium success' size='medium' color='success' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required />
        <TextField label='Password' type='password' helperText='do not share your password with anyone' />
        <TextField label='disabled Input' disabled />
        <TextField label='read only Input' inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='amount'
          InputProps={{
            startAdornment: (<InputAdornment position='start'>$</InputAdornment>)
          }}
        />
        <TextField label='weight'
          InputProps={{
            endAdornment: (<InputAdornment position='end'>KG</InputAdornment>)
          }} />
        <TextField
          label='password and be show'
          type={showPass === true ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' sx={{ '&:hover': { cursor: 'pointer' } }} onClick={() => setShowPass(!showPass)}>
                {showPass === true ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            )
          }}
        />

        <TextField
          label='required with error field'
          type='text'
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'error' : 'do not share thius password with anyone'}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;;