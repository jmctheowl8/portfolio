import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import reportWebVitals from'./repotWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
reportWebVitals()