import React from 'react'
import '../src/Styles/App.css';
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return ( 
    <>
      <Routes>
      <Route path="/" element={ <LandingPage /> } />
      </Routes>
    </>
  );
}

export default App;
