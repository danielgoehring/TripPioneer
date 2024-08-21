import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./features/SearchBar";
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import PageTop from "./PageTop";

function App() {
  return (
    <Router>
      <PageTop />
      <div>
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Listing/:id" element={<Listing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{
  /* <Route path="/listing/:id" element={<Listing />} />; */
}
