import React from 'react';
import { Box, Divider, Grid, Paper, Stack } from '@mui/material';

const MuiLayOut = () => {
  return (
    <Paper sx={{ padding: '2rem' }} elevation={4}>
      <Stack
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
        sx={{ border: 'solid 1px' }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: '250px',
            height: '250px',
            color: '#fff'
          }}
        >
          MuiBox
        </Box>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            width: '250px',
            height: '250px',
            color: '#fff'
          }}
        ></Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={2} justifyContent='center' >
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
          <Box bgcolor='red' p={2}>item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Box bgcolor='blue' p={2}>item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Box bgcolor='green' p={2}>item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Box bgcolor='gray' p={2}>item 4</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Box bgcolor='black' p={2}>item 5</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <Box bgcolor='#f2f2f2' p={2}>item 6</Box>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default MuiLayOut;