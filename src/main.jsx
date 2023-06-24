import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import '../src/assets/css/main.css';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios' 

// http://localhost:3000
//https://backend-cap-273v.vercel.app
axios.defaults.baseURL = 'https://backend-cap-273v.vercel.app';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)