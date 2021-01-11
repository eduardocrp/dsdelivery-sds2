import { ToastContainer } from 'react-toastify';
import React from 'react';
import './App.css';
import Routes from './Routes';

function App( ) {
  return (
    <>
      <Routes />
      <ToastContainer />	    
    </>
  );
}

export default App;
