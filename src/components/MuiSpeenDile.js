import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import React from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
const MuiSpeenDile = () => {
  return (
    <SpeedDial
      ariaLabel='Navigation speed dial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle='copy' />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle='print' />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='share' />

    </SpeedDial>
  );
};

export default MuiSpeenDile;