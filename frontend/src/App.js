import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import PhotoUpload from "./components/PhotoUpload";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/upload" element={<PhotoUpload />} />
        <Route path="/support" element={<Chatbot />} />
      </Routes>

    </Router>
  );
}

export default App;
