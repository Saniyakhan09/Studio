import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MainApp(){
  return(
    <StrictMode>
    <App/>
  </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<MainApp />);
