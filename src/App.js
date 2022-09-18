import { Stack } from '@mui/system';
import React from 'react';
import MuiCard from './components/MuiCard';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiRating from './components/MuiRating';
// import MuiSelect from './components/MuiSelect';
// import MuiTextField from './components/MuiTextField';
// import Test from './components/test';
// import MuiButton from './components/MuiButton';
// import MuiRadioButtons from './components/MuiRadioButtons';  
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiSwitch from './components/MuiSwitch';
// import MuiLayOut from './components/MuiLayout';
import MuiAccordion from './components/MuiAccordion';




const App = () => {
  /*
  components I already worked on

  <MuiButton />
  <Test/>
  <MuiTextField />
  <MuiSelect />
  <MuiRadioButtons />
  <MuiCheckbox />
  <MuiSwitch />
  <MuiRating />
  <MuiAutoComplete />
  <MuiLayOut />
  <MuiCard />
  */
  return (
    <Stack m='auto' justifyContent='center' maxWidth='1536px'>
      <MuiAccordion />
    </Stack>
  );
};

export default App;