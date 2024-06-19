import "./App.css";
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import CV from "./pages/Cv";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProfileCard from "./pages/ProfileCard";
import HeroSec from "./pages/HeroSec";
import PricePlan from "./pages/PricePlan";
import Testinonial from "./pages/Testinonial";
import Eduction from "./pages/Eduction";
import Footer from "./pages/Footer";
import Map from "./pages/Map";
function App() {
  return (
    <div className="bg-[#E5E5E5] overflow-hidden">
      <Router>
        <div className="flex ">
          {/* Left sidebar */}
          <ProfileCard />

          {/* Main content */}
          <div className="flex-grow  p-4">
            {/* Your main content here */}
            <HeroSec />
            <Services />
            <PricePlan />
            <Testinonial />
            <Eduction />

            <Portfolio/>
            <Blog />
            <Contact />
            <Map/>

            <div className="container mx-auto flex-grow py-8">
              <Routes>
                <Route path="/" element={<HeroSec />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>

          {/* Right sidebar navbar */}
          <Navbar />
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
