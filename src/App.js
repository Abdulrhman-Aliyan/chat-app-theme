import logo from './logo.svg';
import Layout from './Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blue} from '@mui/material/colors';

import './App.css';


const theme = createTheme({
  palette: {
      // mode: 'dark',
      primary: {
          main: '#ffffff', // Change to the desired primary color
      },
      secondary: {
          main: blue[500], // Change to the desired secondary color
      },
      text: {
        primary: '#000000', // Black text
      },        
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
