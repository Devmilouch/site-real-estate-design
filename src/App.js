import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Homes from "./pages/Homes";
import Contact from "./pages/Contact";

import Aos from "aos";
import "aos/dist/aos.css";



function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar toggle={toggle}/>
        <Dropdown toggle={toggle} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/rentals" element={<Rentals/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
