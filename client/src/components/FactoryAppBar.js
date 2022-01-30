import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function FactoryAppBar(){

    return(
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="h2"  sx={{ mr: 2 }}>
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="h6" component="h2" >
                <Link to="/new">New Fundraiser</Link>
              </Typography>      
            </Toolbar>
          </AppBar>
        </Box>
        );
}
export default FactoryAppBar;