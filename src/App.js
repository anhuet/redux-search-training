import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.sass';
import Navbar from './components/Navbar'

import Products from './containers/Products'
import ProductDetail from './components/ProductDetail'


function App() {
  
  
  
  return (
    <BrowserRouter  >
      <div className="App">
        <Navbar />
        <main >
          
          <div>
            <Route path="/" exact component={Products}></Route>
            <Route path="/product/:id" component={ProductDetail}></Route>
          </div>
        </main>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
