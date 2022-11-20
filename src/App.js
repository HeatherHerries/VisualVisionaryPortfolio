import React from 'react'
import '../src/Styles/App.css';
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import { Route, Routes } from "react-router-dom"

function App() {
  return ( 
    <>
      <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/AboutPage" element={ <AboutPage /> } />
      <Route path="/ContactPage" element={ <ContactPage /> } />
      </Routes>
    </>
  );
}

export default App;
