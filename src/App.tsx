import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SignUp2 from './pages/SignUp2';
import SignUp from './pages/SignUp';
import Rooms from './pages/Rooms';
import Login from './pages/Login';

import RoomDetail from './pages/RoomDetail';
// import RoomDetail2 from './pages/RoomDetail2';
// import RoomDetail3 from './pages/RoomDetail3';
// import RoomDetail4 from './pages/RoomDetail4';
// import RoomDetail5 from './pages/RoomDetail5';
import GetCode from './pages/GetCode';
import ResetPassword from './pages/ResetPassword';
import BookingConfirmation from './pages/BookingConfirmation';
import ScrollToTop from './components/Layout/ScrollToTop';
import BookingSuccessed from './pages/BookingSuccessed';

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/get-code" element={<GetCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room-detail/:id" element={<RoomDetail />} />
        <Route path="/confirm-booking" element={<BookingConfirmation />} />
        <Route path="/successed-booking" element={<BookingSuccessed />} />
      </Routes>
    </>
  )
}

export default App;
