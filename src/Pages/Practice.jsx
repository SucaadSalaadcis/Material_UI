import React, { useState } from 'react'
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'

import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CheckBox } from '@mui/icons-material';


const CheckboxExmaple = () => {
    const [checked, setChecked] = useState(true);
    return (
        <FormControlLabel
            control={
                <CheckBox
                    checked={checked}
                    icon = {<AcUnitOutlinedIcon/>}
                    checkedIcon = {<AcUnitOutlinedIcon/>}
                    onChange={(e) => setChecked(e.target.checked)}
                    color='primary'
                />}
                label='Testing check box'

        >

        </FormControlLabel>
    )
}

export default function Create() {

    return (
        // gives some padding and margins to the component
        <Container>

            <CheckboxExmaple />

            <TextField 
             type='time'
             variant='filled'
             label= 'time'
             placeholder='hghddhgs'
            />

            {/* default type of typography is p  , noWrap : is don't go to the next line it will end like ... three dots */}
            <Typography variant='h1' component={'div'} color='primary' align='center'>
                create a New Note
                {/* is like div with h2 styling */}
            </Typography>

            <Typography color='secondary' noWrap>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ex magni optio numquam ad dicta eligendi culpa impedit cumque voluptatibus dolor doloribus officia adipisci! Ea culpa illum esse rerum repudiandae!
            </Typography>

            {/* buttons */}
            <Button type='submit' color='secondary' variant='outlined'>Submit</Button>
            <Button variant="text" size='large'>Text</Button>
            <Button variant="contained" size='small'>Contained</Button>
            <Button variant="outlined" disabled>Outlined</Button>

            <ButtonGroup color='secondary' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <Button
                type='submit'
                color='secondary'
                variant='contained'
                startIcon={<ScheduleSendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
                onClick={() => console.log('you click me')}>
                Submit
            </Button>


            {/* icons */}
            <AcUnitOutlinedIcon />
            <AcUnitOutlinedIcon color='secondary' fontSize='large' />
            <AcUnitOutlinedIcon color='secondary' fontSize='small' />
            <AcUnitOutlinedIcon color='action' fontSize='small' />
            <AcUnitOutlinedIcon color='error' fontSize='small' />
            <AcUnitOutlinedIcon color='disabled' fontSize='small' />

            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>4</Paper>
                </Grid>
            </Grid>



        </Container>
    )
}
