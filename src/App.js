import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Link1 from './Js-file/Link1'
import Section3 from './Js-file/Section3'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      
    
    <BrowserRouter>
          
         
            <Routes>
                 <Route path='/'element={<Section3/>}/>
                 <Route path='link1'element={<Link1/>}/>
            </Routes>


    </BrowserRouter>
    
      </div>
    );
  }
}

export default App;
