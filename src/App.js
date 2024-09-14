// import { useState } from "react";
import React from 'react'
import Home1 from "./Home1";
import About from "./About";
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home1/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
    </>

    

  );

  }

export default App;
