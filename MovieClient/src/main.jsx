  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import {BrowserRouter,Routes,Router,Route} from 'react-router-dom';
  

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
    </StrictMode>
  ) 

  //rafc