import React from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
  return (
    <Box sx={{ width: 400, backgroundColor: '#efefef' }}>
      <List>
        <ListItemButton>
          <ListItem disablePadding>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='list item 1' secondary='secondary text' />
          </ListItem>
        </ListItemButton>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='list item 2' />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary='list item 3' />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;;