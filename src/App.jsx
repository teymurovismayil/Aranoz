import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Layout/Layout';
import Home from '../Page/Home';
import Admin from '../Page/Admin';
import Add from '../Page/Add';
import Edit from '../Page/Edit';


function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route index element={<Home />}/>
         
        </Route>
        <Route element={<Admin />} path='/admin'></Route>
        <Route element={<Add/>} path='/add'></Route>
        <Route element={<Edit/>} path={'/edit/:id'}></Route>

      </Routes>

   
    </>
  )
}

export default App
