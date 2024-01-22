import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Section3 from './Js-file/Section3'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Maincategories from '../src/Js-file/MainCategories';


class App extends Component {
  render() {
    return (
      <div>
      
    
    <BrowserRouter>
          
         
            <Routes>
                 <Route path='/'element={<Section3/>}/>
                 <Route path='link1'element={<Maincategories/>}/>
            </Routes>


    </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
