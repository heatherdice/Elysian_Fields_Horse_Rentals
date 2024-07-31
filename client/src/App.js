import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
