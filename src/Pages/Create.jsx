import React, { useState, } from 'react';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useNavigate } from 'react-router-dom'

export default function Create() {

    const [title, setTitle] = useState();
    const [details, setDetails] = useState();
    const [error, setError] = useState(false);
    const [category, setCatergory] = useState('todo');

    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();

        if (title && details) {
            setError(false);
            fetch('http://localhost:5000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
        } else {
            setError(true);
        }
        console.log(title, details, category)
    }

    return (
        <Container>

            <Typography
                variant="h6" component="h2" color="secondary" gutterBottom>
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    label='title'
                    color='secondary'
                    fullWidth
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    error={error}
                />
                <TextField
                    sx={{ marginTop: '20px' }}
                    label='details'
                    color='secondary'
                    fullWidth
                    multiline
                    rows={4}
                    required
                    error={error}
                    onChange={(e) => setDetails(e.target.value)}
                />

                <FormControl sx={{ marginTop: '20px', marginBottom: '20px', display: 'block' }}>

                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCatergory(e.target.value)}>
                        <FormControlLabel value={'money'} control={<Radio />} label='Money' />
                        <FormControlLabel value={'todo'} control={<Radio />} label='Todo' />
                        <FormControlLabel value={'reminder'} control={<Radio />} label='Reminder' />
                        <FormControlLabel value={'work'} control={<Radio />} label='Work' />
                        {/* <Radio value="hello" ></Radio> */}
                    </RadioGroup>

                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        marginTop: '10px',
                        backgroundColor: 'red'
                    }}
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>

        </Container>
    );
}
