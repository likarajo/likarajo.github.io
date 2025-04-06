import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './index.css'

import Header from './components/Header.jsx';
import App from './components/App.jsx'
import Footer from './components/Footer.jsx';

const THEME = createTheme({
  typography: {
   "fontFamily": `"Georgia", serif`,
   "lineHeight": 1.5,
   "fontWeight": 400
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Header/>
      <br/>
      <App/>
      <Footer/>
      <br/><br/>
    </ThemeProvider>
  </React.StrictMode>,
)
