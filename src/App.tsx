// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SignUp2 from './pages/SignUp2';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Login from './pages/Login';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </>
  )
}

export default App
