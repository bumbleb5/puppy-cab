import React from 'react';
import { AppBar, Grid2 as Grid, Toolbar, Typography } from '@mui/material';

const TopNav: React.FC = () => {
    return (
        <AppBar
            component="nav"
            sx={{
                height: '60px',
                position: 'static',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            <div style={{ display: 'flex' }}>
                <Typography
                    sx={{ position: 'relative', left: '85px', top: '12px' }}
                    marginLeft="1rem"
                >
                    PuppyCab
                </Typography>
                <div>
                    <img
                        src="../../../public/train-car.svg"
                        height="45px"
                        style={{
                            position: 'relative',
                            top: '9px',
                            left: '3px'
                        }}
                    />
                    <img
                        src="../../../public/train-car.svg"
                        height="45px"
                        style={{
                            position: 'relative',
                            top: '9px',
                            left: '3px'
                        }}
                    />
                    <img src="../../../public/train.svg" height="45px" />
                </div>
            </div>
        </AppBar>
    );
};

export default TopNav;
