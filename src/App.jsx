import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Layout/Layout';
import Awesome from './Component/Awesome';
import BestSellers from './Component/BestSellers';
import Admin from '../Page/Admin';
import Home from '../Page/Home';


function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route index element={<Home />}/>
          <Route element={<Admin />} path='/admin'></Route>
        </Route>



      </Routes>

   
    </>
  )
}

export default App
