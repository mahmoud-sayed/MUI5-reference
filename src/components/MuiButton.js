import React, { useState } from 'react';
import { Button, ButtonGroup, IconButton, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

  //const [formats, setFormats] = useState < string[] > ([]);
  return (
    <Stack alignItems='center' mt={2} direction='column' spacing={3}>
      <Stack gap={2} direction='row'>
        <Button variant='text'>MuiButton</Button>
        <Button variant='contained'>MuiButton</Button>
        <Button variant='outlined'>MuiButton</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary' >secondary</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
      </Stack>
      <Stack display='block' direction='row' spacing={.5}>

        <Button size='small' variant='contained' color='primary'  >small</Button>
        <Button variant='contained' color='primary' size='medium'>small</Button>
        <Button variant='contained' color='primary' size='large'>small</Button>
      </Stack>
      <Stack display='block' direction='row' spacing={.5}>
        <Button variant='contained' color='primary' size='small' endIcon={<SendIcon />}>
          small
        </Button>
        <Button variant='contained' color='primary' size='medium' startIcon={<SendIcon />}>small</Button>
        <IconButton color='success' size='small' aria-label='send'><SendIcon /></IconButton>
      </Stack>
      <Stack>
        <ButtonGroup variant='text' orientation='horizontal' >
          <Button>left</Button>
          <Button>meddel</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;