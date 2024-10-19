import React, { useState } from 'react'

import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import { format } from 'date-fns'

const drawerWidth = 240;
const typographyWidth = 220

export default function Layout({ children }) {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItem = [
        {
            text: 'myNotes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: 'Create',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create'
        }
    ]

    return (
        <div style={{ display: 'flex' }}>
            {/* app bar */}
            <AppBar
                sx={{ width: `calc(100% - ${typographyWidth}px)`, backgroundColor: 'white', color: 'black' }}
            // elevation={0} // is the shadow

            >

                <Toolbar>
                    <Typography sx={{ flexGrow: '1' }}> Today is the {format(new Date(), 'do MMMM Y')}</Typography>
                    <Typography> Mario</Typography>
                    <Avatar sx={{marginLeft: '8px'}} src='https://i0.wp.com/play.co.rs/wp-content/uploads/2023/06/Super-Mario-RPG-Remake.jpg?resize=1000%2C600&ssl=1'/>
                </Toolbar>

            </AppBar>

            {/* side drawer */}
            <Drawer
                sx={{ width: drawerWidth }}
                variant='permanent'
                anchor='left'
            >

                <div style={{ width: typographyWidth }}>
                    <Typography variant='h5' sx={{ padding: '13px' }}>Suad Notes</Typography>
                </div>

                {/*list / links  */}
                <List>
                    {
                        menuItem.map(item => (

                            <ListItem
                                key={item.text}
                                button
                                onClick={() => navigate(item.path)}
                                sx={{ backgroundColor: location.pathname === item.path ? '#f4f4f4' : null }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

            <div style={{ background: '#f9f9f9', width: '100%', gap: '5px', marginTop: '90px' }}>
                {children}
            </div>
        </div>
    )
}
