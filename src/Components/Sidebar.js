import './Sidebar.css'

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

const Sidebar = ({dir,drawerWidth,children}) => {


  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor={dir}
    >
    <Toolbar sx={{height:'70px'}}/>
    {children}
   </Drawer>
  )
}

export default Sidebar