import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import SearchIcon from '@mui/icons-material/Search';



const ChatContactSearch = () => {
  return (
    <Toolbar sx={{display: 'flex', flexDirection: 'column', paddingY: '10px'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}> 
            <Typography variant='h5'
             sx={{fontWeight:'700', 
             color:(theme) => {return theme.palette.text.secondary},
             width:'100%',
             }}>
                Chat
             </Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Button sx={{
                    bgcolor:(theme)=>theme.palette.primary.main,
                    color:(theme)=>theme.palette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'bottom',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                }}>
                    <AddRoundedIcon sx={{height:'1rem'}}/> New
                </Button>

                <Button sx={{
                    bgcolor:(theme)=>theme.palette.primary.main,
                    color:(theme)=>theme.palette.text.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'bottom',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                }}>
                    <FilterListRoundedIcon sx={{height:'1rem'}}/> Filter
                </Button>
            </Box>
        </Box>
        <Box sx={{padding: '10px 0 0 0'}}> 
        <div style={{ 
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'grey', 
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '30px',
              padding: '0 25px 0 15px',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '30px',
              }}>
            <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
            <TextField
                label="Search"
                type="search"
                variant="filled"
                fullWidth
                color="secondary"
            />
        </div>
        </Box>
    </Toolbar>
  )
}

export default ChatContactSearch