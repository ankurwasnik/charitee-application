import React from 'react';
import { BrowserRouter as Router, Link, Route ,NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function FactoryAppBar(){

    return(
        <div className='container'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="h2"  sx={{ mr: 4 }}>
                <NavLink to="/">Home</NavLink>
              </Typography>
              <Typography variant="h6" component="h2" >
                <NavLink to="/new">New Fundraiser</NavLink>
              </Typography>      
            </Toolbar>
          </AppBar>
        </Box>
        </div>
        );
}
export default FactoryAppBar;