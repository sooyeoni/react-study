import React from 'react';
import {  BrowserRouter,  Routes,  Route,  Link } from "react-router-dom";
import Main from './page6/Main';
 
import './css/reset.css'
import './page6/style.css'
import Products from './page6/Products';
import ProductDetail from './page6/ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <> 
         <nav>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/products">Products</Link></li>
           </ul>
         </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products">
              <Route  index element={ <Products /> } />
              <Route path=":productID" element={ <ProductDetail /> }   />
            </Route>                                  
          </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;