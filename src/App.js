import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Login from './pages/Login';
import Landing from './pages/landing/Landing';
import Register from './pages/Register';
import Reservation from './pages/reservation/Reservation';
import ReservationNew from './pages/reservation/ReservationNew';
import ReservationSuccess from './pages/reservation/ReservationSuccess';
import Location from './pages/location/Location';
import Dashboard from './pages/Dashboard';

const App = (props) => {

  const LoggedInRoute = () => {
    if(sessionStorage.length === 0) {
      return <Navigate to='/login' />
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/reservation/new' element={<ReservationNew />} />
          <Route path='/reservation/:id' element={<ReservationSuccess />} />
          <Route path='/location' element={<Location />} />

          {/* Logged In Route */}
          <Route element={<LoggedInRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;