import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";

import './css/reset.css'
import About from './page2/About';
import Ceo from './page2/Ceo';
import Home from './page2/Home';
import NavBar from './page2/NavBar';
import NotFiles from './page2/NotFiles';
import './page2/style.css'
import Sub1 from './page2/Sub1';

const App = () => {
  return (
    <BrowserRouter>
      <>
          <NavBar />

          {/* 화면에보이는영역 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ceo" element={<Ceo />} />
            <Route path="/sub1" element={<Sub1 />} />
            <Route path="*" element={<NotFiles />} />
          </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;