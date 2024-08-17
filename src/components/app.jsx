import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Consulting from './components/Consulting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
