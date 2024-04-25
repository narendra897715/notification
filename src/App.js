
import './App.css';
import * as React from 'react';


import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ProfileProgress from './profileprogress';
import Home from './home';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element=
        {<ProfileProgress></ProfileProgress>}> </Route>
         <Route path="/home" element=
        {<Home></Home>}> </Route>
       
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
