import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Department from './components/Department';
import Events from './components/Event';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;