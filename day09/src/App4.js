import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";

import About from './page4/About';
import Home from './page4/Home';
import Profile from './page4/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        
          {/* 화면에보이는영역 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} >
                 <Route path=":name" /> 
                 {/*   /profile/:name  */}
            </Route>                      
          </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;