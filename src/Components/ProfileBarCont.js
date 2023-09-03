import React from 'react';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import LargeSquarBtns from '../microComponents/LargeSquarBtns';
import { Stack, Box } from  '@mui/material';
import Typography from '@mui/material/Typography';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';

const ProfileBarCont = () => {
  return (
    <div>
        <div>
            <div style={{backgroundColor:'#061c46' ,width:'100%',minHeight:'18vh'}}>
                {/* Chnage background color to background image to put an image */}
            </div>
        </div>
        <div style={{position:'relative'}} >
            <Avatar sx={{ 
                    bgcolor: grey[500],
                    position:'absolute',
                    top: '0%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    border: '2px solid #fff',
                    width: 56,
                    height: 56 
                }} 
                variant="rounded">
                R
            </Avatar>

            <Box sx={{paddingY: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{
                    fontWeight: 700,
                    color: (theme) => theme.palette.text.secondary, 
                    }}> 
                    Abdalrhman Aliyan 
                    </Typography>
                <Typography sx={{
                fontSize: 12,
                color: (theme) => theme.palette.text.disabled, 
                }}> 
                    Active Now 
                </Typography>
            </Box>
            

            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:{xs:'center'},
                    width: {xs: '100%'},
                    textAlign: 'center',}}
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <LargeSquarBtns iconBtn={<NotificationsRoundedIcon/>}> 
                      Mute
                  </LargeSquarBtns>
                  <LargeSquarBtns iconBtn={<PhotoLibraryRoundedIcon/>}> 
                      Media
                  </LargeSquarBtns>
                  <LargeSquarBtns iconBtn={<TuneRoundedIcon/>}> 
                      Options
                  </LargeSquarBtns>
            </Stack>
        </div>
    </div>
  )
}

export default ProfileBarCont