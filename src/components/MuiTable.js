import { Table, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import React from 'react';

const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead></TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;