import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Header from './components/Header.jsx';
import App from './components/App.jsx'
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>,
)
