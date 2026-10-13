import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './index.css'

import Header from './components/Header.jsx';
import App from './components/App.jsx'
import Footer from './components/Footer.jsx';

const THEME = createTheme({
  typography: {
   fontFamily: `"Georgia", serif`,
   fontSize: 16,
   lineHeight: 1.5,
   fontWeight: 400
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { minHeight: 44, paddingLeft: 16, paddingRight: 16 } }
    },
    MuiIconButton: {
      styleOverrides: { root: { width: 44, height: 44 } }
    },
    MuiListItemButton: {
      styleOverrides: { root: { minHeight: 44 } }
    },
    MuiMenuItem: {
      styleOverrides: { root: { minHeight: 44 } }
    },
    MuiPaginationItem: {
      styleOverrides: { root: { minWidth: 44, minHeight: 44, fontSize: 16 } }
    },
    MuiInputBase: {
      styleOverrides: { input: { fontSize: 16 } }
    },
    MuiInputLabel: {
      styleOverrides: { root: { fontSize: 16 } }
    },
    MuiModal: {
      defaultProps: { disableScrollLock: true }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Header/>
      <App/>
      <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
)
