import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
