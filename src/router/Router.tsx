import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../components/Pages/Home"
import List from "../components/Pages/List"
import Create from "../components/Pages/Create"
import Test from "../components/Pages/Test"

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>    
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}