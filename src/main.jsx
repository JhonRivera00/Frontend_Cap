import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import '../src/assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL = 'https://backend-cap-273v.vercel.app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
