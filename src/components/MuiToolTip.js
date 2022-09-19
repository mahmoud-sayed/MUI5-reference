import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const MuiToolTip = () => {
  return (
    <Tooltip title='delete' placement='right' arrow d>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};

export default MuiToolTip;