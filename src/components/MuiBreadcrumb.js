import { Box, Link, Breadcrumbs } from '@mui/material';
import React from 'react';

const MuiBreadcrumb = () => {
  return (
    <Box m={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link href='#' underline="hover" key="1" >Hello</Link>
        <Link href='#' underline="hover" key="1" >Hello</Link>
        <Link href='#' underline="hover" key="1" >Hello</Link>
        <Link href='#' underline="hover" key="1" >Hello</Link>
        <Link href='#' underline="hover" key="1" >Hello</Link>
      </Breadcrumbs>

    </Box>
  );
};

export default MuiBreadcrumb;