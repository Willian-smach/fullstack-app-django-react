import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormHome from '../FormHome'
import TableHome from '../TableHome'
import Overview from '../Overview'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection:'row',  flexGrow: 1 }}>
          <FormHome />
          <TableHome />
          <Overview/>
    </div>
  );
}
