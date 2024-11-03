import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Info from './component/Info';  
import PrivacyPolicy from './component/Privacy';
import CookiePolicy from './component/Cookie';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex flex-col min-h-[100vh] mt-[4rem] mb-16 pb-16 ">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Contact Us" element={<Contact/>} />
            <Route path="/Information" element={<Info />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
 </div>
    </Router>

  );

}

export default App;




