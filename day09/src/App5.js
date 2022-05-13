import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";
import Main from './page5/Main';
import Member from './page5/Member';
import MemberDetail from './page5/MemberDetail';

const App = () => {
  return (
    <BrowserRouter>
      <> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="member">
                 <Route element={ <Member /> } /> 
                 <Route path=":memberID" element={ <MemberDetail /> } />
            </Route>                         
          </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;