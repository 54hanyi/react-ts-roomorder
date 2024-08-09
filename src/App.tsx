import { Routes, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/Layouts/ScrollToTop';
import Layout from './components/Layouts/Layout';

import Home from './pages/Home';
import SignUp2 from './pages/SignUp2';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Login from './pages/Login';
import RoomDetail from './pages/RoomDetail';
import GetCode from './pages/GetCode';
import ResetPassword from './pages/ResetPassword';
import BookingConfirmation from './pages/BookingConfirmation';
import BookingSuccessed from './pages/BookingSuccessed';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/get-code" element={<GetCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup2" element={<SignUp2 />} />
          
          <Route path="/room-detail/:id" element={<RoomDetail />} />
          <Route path="/confirm-booking" element={<BookingConfirmation />} />
          <Route path="/successed-booking" element={<BookingSuccessed />} />

          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
