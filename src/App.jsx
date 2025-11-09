import { useState } from 'react'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DelMod from './components/DelMod/DelMod'
import AddLiq from './components/AddLiq/AddLiq'
import Login from './components/Login/Login'
import Signup from './components/Signup'
import ViewLiq from './components/ViewLiq/ViewLiq'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/del" element={<DelMod/>}/>
          <Route path="/add" element={<AddLiq/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/liq/:id" element={<ViewLiq/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
