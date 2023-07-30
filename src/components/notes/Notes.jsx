import * as React from 'react';

import { useContext } from 'react';

import { styled } from '@mui/material/styles';
import {Box, Grid } from '@mui/material';

//components
import Form from "./Form";
import Note from './Note';

import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';


const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Notes = () => {

  const { notes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        {
          notes.length > 0 ?
          <Grid container style={{marginTop: 16}}>
          {
            notes.map(note => (
              <Grid item>
              <Note note={note}/>
              </Grid>
            ))
          }
          </Grid>
          : <EmptyNotes />
        }
      </Box>
      
      
    </Box>
  )
}

export default Notes
