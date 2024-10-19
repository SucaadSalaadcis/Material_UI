import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid';

import { Container } from '@mui/material';
import NoteCard from '../components/NoteCard';

import Masonry from 'react-masonry-css';

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:5000/notes/' + id, {
      method: 'DELETE'
    })
    const newNote = notes.filter(note => note.id != id);
    setNotes(newNote);
  }

  const breakpoint = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container>
      {/* before */}

      {/* 
      <Grid container spacing={3}>

        {
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Grid>
          ))
        }
        </Grid> */}
        

      {/* after */}

      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {

          notes.map((note) => (
            <div item key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </div>
          ))
        }

      </Masonry>

    </Container>
  )
}
