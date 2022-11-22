import React from 'react'
import '../src/Styles/App.css';
import LandingPage from './Pages/LandingPage'
import AboutPage from './Pages/AboutPage'
<<<<<<< HEAD
import ContactPage from './Pages/ContactPage'
=======
import PortfolioPage from './Pages/PortfolioPage'
>>>>>>> 8186e1b842a8dbc89752b228c0c2bd78d1960040
import { Route, Routes } from "react-router-dom"

function App() {
  return ( 
    <>
      <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/AboutPage" element={ <AboutPage /> } />
<<<<<<< HEAD
      <Route path="/ContactPage" element={ <ContactPage /> } />
=======
      <Route path="/PortfolioPage" element={ <PortfolioPage /> } />
>>>>>>> 8186e1b842a8dbc89752b228c0c2bd78d1960040
      </Routes>
    </>
  );
}

export default App;
