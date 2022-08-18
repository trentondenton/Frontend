import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={() => { }} />
          <Route exact path="/pos" element={() => { }} />
          <Route exact path="*" element={() => { }} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
