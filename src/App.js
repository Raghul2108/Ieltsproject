import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Info from './component/Info';
import PrivacyPolicy from './component/Privacy';
import CookiePolicy from './component/Cookie';
import Contact from './component/Contact';
import Assessment from './component/Assessment';
import Booking from './component/Booking';
import Payment from './component/Payment';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex flex-col min-h-[100vh] mt-[4rem] mb-16 pb-16">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Contact Us" element={<Contact/>} />
            <Route path="/Information" element={<Info />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/Assessment test" element={<Assessment/>} />
            <Route path="/book/slot/beginner" element={<Booking/>} />
            <Route path="/book/onspot/beginner" element={<Payment/>} />
            <Route path="/book/slot/intermediate" element={<Booking/>} />
            <Route path="/book/onspot/intermediate" element={<Payment/>} />
            <Route path="/book/slot/expert" element={<Booking/>} />
            <Route path="/book/onspot/expert" element={<Payment/>} />
          </Routes>
        </main>
        <Footer />
 </div>
    </Router>

  );

}

export default App;





