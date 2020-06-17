import React from 'react';
import { AppBar,Typography } from '@material-ui/core';


const Navbar = () => {
    return (
        <div >
            <AppBar position="static" style={{ background: '#2E3B55',marginBottom: '40px'  }}>
                
                    <Typography variant="h3" style={{textAlign: 'center'}} >
                     LyricFinder
                    </Typography>
                    
               
            </AppBar>
        </div>
    )
}
export default Navbar;
