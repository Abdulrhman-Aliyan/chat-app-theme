import React from 'react'

import Avatar from '@mui/material/Avatar';
import {green} from '@mui/material/colors';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { random } from 'lodash';


import AssignmentIcon from '@mui/icons-material/PortraitRounded';





const NewMsgView = ({name,msg,days}) => {

  const formatTimePeriod = (days) => {
    if (days >= 365) {
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      return `${years} year${years > 1 ? 's' : ''}${remainingDays > 0 ? `, ${remainingDays} day${remainingDays > 1 ? 's' : ''}` : ''}`;
    } else if (days >= 30) {
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      return `${months} month${months > 1 ? 's' : ''}${remainingDays > 0 ? `, ${remainingDays} day${remainingDays > 1 ? 's' : ''}` : ''}`;
    } else {
      return `${days} day${days > 1 ? 's' : ''}`;
    }
  }
  
  console.log(formatTimePeriod(55))

  return (
      <>
      <Toolbar sx={{paddingX: '5px'}}>
        <Avatar sx={{backgroundColor: `hsl(${random(0, 360)}, ${random(50, 100)}%, ${random(40, 60)}%)`}} variant="rounded">
          <AssignmentIcon />
        </Avatar>
        <Stack sx={{color:(theme) => theme.palette.text.secondary}} marginLeft={1}>
          <Typography variant="subtitle1" sx={{ fontWeight:'700' }}>
              {name}
          </Typography>
          <Typography variant="body2" sx={{ color:(theme) => theme.palette.text.secondary }}>
              {msg} &#8226; {formatTimePeriod(days)}
          </Typography>
        </Stack>
      </Toolbar>

      <Divider />
      </>
  )
}


export default NewMsgView;
