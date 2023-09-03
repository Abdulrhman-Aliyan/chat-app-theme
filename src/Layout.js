import React from 'react'
import Appbar from './Components/Appbar';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewMsgView from './Components/NewMsgView';
import ChatContactSearch from './Components/ChatContactSearch';
import ProfileBarCont from './Components/ProfileBarCont';
import LargeSquarBtns from './microComponents/LargeSquarBtns';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';



const Layout = () => {

  return (

        <div>
            <Appbar />
            <div>

                <Sidebar dir="left" drawerWidth={330}>
                  <ChatContactSearch/>
                  <NewMsgView name={'Ahmad'} msg={'Graphic designer'} days={3}/>
                  <NewMsgView name={'Abdalrhman'} msg={'Hello world'} days={32}/>
                  <NewMsgView name={'mohammed'} msg={'see ya...'} days={150}/>
                  <NewMsgView name={'Hamza'} msg={'see facebook please'} days={211}/>
                  <NewMsgView name={'Mothna'} msg={'come to dinner tommorw'} days={250}/>
                  <NewMsgView name={'Ramiz'} msg={'hi.'} days={300}/>
                </Sidebar>

                <Chat />

                <Sidebar dir="right" drawerWidth='320px'>
                  <ProfileBarCont/>
                </Sidebar>

            </div>
        </div>

  )
}

export default Layout