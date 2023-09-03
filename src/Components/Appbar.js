import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import AdbIcon from '@mui/icons-material/Adb';
import { BorderRight } from '@mui/icons-material';
import AppbarIconButtons from '../microComponents/AppbarIconButtons';
import Stack from '@mui/material/Stack';

import {blue} from '@mui/material/colors';

import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';

import AppsOutageRoundedIcon from '@mui/icons-material/AppsOutageRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
    position="fixed" 
    elevation={0} 
    sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid', 
        borderColor: (theme) => theme.palette.divider

    }}>
      <Container maxWidth="xl" sx={{my:'0'}}>
        <Toolbar disableGutters sx={{my:'0'}}>
            <Box sx={{
                display: 'flex',
                verticalAlign: 'middle',
                alignItems: 'center',
                borderRight: '1px solid',
                height: '70px',
                borderColor:  (theme) => theme.palette.divider,
                }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: blue[500],
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: blue[500],
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }} }>
                <Stack direction="row" spacing={2} marginX={2}>
                    <AppbarIconButtons size="large">
                        <ChatRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>

                    <AppbarIconButtons size="large">
                        <RecentActorsRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>

                    
                    <AppbarIconButtons size="large">
                        <Badge badgeContent={2} color='secondary'  sx={{ fontWeight: '600' }}>
                            <SmartToyRoundedIcon fontSize="inherit" />
                        </Badge>
                    </AppbarIconButtons>
                    

                    <AppbarIconButtons size="large">
                        <PortraitRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>

                    <AppbarIconButtons size="large">
                        <CollectionsRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>
                </Stack>
            </Box>

            <Box sx={{ flexGrow: 0, alignItems: 'center', display:'flex' } }>
                <Stack direction="row" spacing={2} marginX={2}>
                    <AppbarIconButtons size="large">
                        <AppsOutageRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>
                    <AppbarIconButtons size="large">
                        <GridViewRoundedIcon fontSize="inherit" />
                    </AppbarIconButtons>
                </Stack>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={{ width: 48, height: 48 }} />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
