import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Solutions from './components/Solutions';
import PartnerSuccess from './components/Partner Success';
import FAQs from './components/FAQ\'s'; 
import Blog from './components/Blog';
import Contact from './components/Contact';
import Clientarea from './components/Clientarea';
import Navbar from './components/Nav';
import Content from './components/Content';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partner-success" element={<PartnerSuccess />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clientarea" element={<Clientarea />} />
         
        </Routes>
       
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
