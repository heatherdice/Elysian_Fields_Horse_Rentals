import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Horses from "./pages/horses";
import Calendar from "./pages/calendar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/horses" component={<Horses />} />
          <Route path="/horses/:category" element={<Horses />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>

        <Footer backgroundColor="var(--english-violet)" textColor="var(--platinum)" />
      </BrowserRouter>
    </div>
  );
}

export default App;
