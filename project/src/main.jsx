import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
{/* dont forget to create report vital .js and then import had to delete import to view page update*/}
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
