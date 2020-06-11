import React from 'react';
import { AppBar,Typography } from '@material-ui/core';
import {styles} from './Navbar.module.css'

const Navbar = () => {
    return (
        <div >
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                
                    <Typography variant="h3" style={{textAlign: 'center'}} >
                     LyricFinder
                    </Typography>
                    
               
            </AppBar>
        </div>
    )
}
export default Navbar;
