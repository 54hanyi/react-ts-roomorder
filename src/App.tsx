// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SignUp2 from './pages/SignUp2';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Login from './pages/Login';

import RoomDetail1 from './pages/RoomDetail1';
import RoomDetail2 from './pages/RoomDetail2';
import RoomDetail3 from './pages/RoomDetail3';
import RoomDetail4 from './pages/RoomDetail4';
import RoomDetail5 from './pages/RoomDetail5';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomdetail1" element={<RoomDetail1 />} />
        <Route path="/roomdetail2" element={<RoomDetail2 />} />
        <Route path="/roomdetail3" element={<RoomDetail3 />} />
        <Route path="/roomdetail4" element={<RoomDetail4 />} />
        <Route path="/roomdetail5" element={<RoomDetail5 />} />
      </Routes>
    </>
  )
}

export default App
