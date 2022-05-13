import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";
import About from './page3/About';
import Front from './page3/Front';
import Home from './page3/Home';
import Profile from './page3/Profile';

const data = [
  {title:'html', info:'html에 대한 설명입니다.'},
  {title:'css', info:'css에 대한 설명입니다.'},
  {title:'javascript', info:'javascript에 대한 설명입니다.'},
  {title:'react', info:'react에 대한 설명입니다.'},
  {title:'vue', info:'vue에 대한 설명입니다.'},
]


const App = () => {
  return (
    <BrowserRouter>
      <>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            <li><Link to="/front/html">html</Link></li>
            <li><Link to="/front/css">css</Link></li>
            <li><Link to="/front/javascript">javascript</Link></li>
            <li><Link to="/front/react">react</Link></li>
            <li><Link to="/front/vue">vue</Link></li>
          </ul>
        
          {/* 화면에보이는영역 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="front/:name" element={<Front  data={data}/>} />          
          </Routes>

      </>
    </BrowserRouter>
  );
};

export default App;