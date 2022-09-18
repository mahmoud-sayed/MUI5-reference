import { Accordion, AccordionSummary, AccordionDetails, Typography, Stack } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MuiAccordion = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='panel-header'
          aria-controls='panel-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='panel-header'
          aria-controls='panel-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='panel-header'
          aria-controls='panel-header'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default MuiAccordion;