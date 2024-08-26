import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./features/SearchBar";
import HomePage from "./pages/HomePage";
import Listing from "./pages/Listing";
import Receipt from "./pages/Receipt";
import PageTop from "./PageTop";

function App() {
  const [displayedOption, setDisplayedOption] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestAmount, setGuestAmount] = useState("");
  const [daysBetween, setDaysBetween] = useState(0);
  const ref = useRef(null);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // Add the fade-in class when the component mounts
    if (ref.current) {
      ref.current.classList.add("fade-in");
    }
  }, []);
  // const [date, setDate] = useState("");

  const handleButtonClick = (selectedOption) => {
    setDisplayedOption(selectedOption);
  };
  const handleGuestAmount = (guestNumber) => {
    setGuestAmount(guestNumber);
  };

  const handleDateSync = (selectedCheckInDate, selectedCheckOutDate) => {
    setCheckInDate(selectedCheckInDate);
    setCheckOutDate(selectedCheckOutDate);
    calculateDaysBetween(selectedCheckInDate, selectedCheckOutDate);
  };

  const calculateDaysBetween = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const timeDifference = checkoutDate - checkinDate;
    const days = Math.abs(timeDifference) / (1000 * 3600 * 24);
    setDaysBetween(days);
  };

  return (
    <Router>
      <div ref={ref} className="flex flex-col min-h-screen">
        <PageTop />
        <Header />
        <div className="flex-grow">
          <SearchBar
            onButtonClick={handleButtonClick}
            dateSync={handleDateSync}
            guestAmount={handleGuestAmount}
            checkInDateprop={checkInDate}
            checkOutDateprop={checkOutDate}
            daysBetween={daysBetween}
            today={today}
          />
          <Routes>
            <Route path="/" element={<HomePage text={displayedOption} />} />
            <Route
              path="/Listing/:id"
              element={
                <Listing
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  guestAmount={guestAmount}
                  dateSync={handleDateSync}
                  daysBetween={daysBetween}
                  handleGuestAmount={handleGuestAmount}
                  today={today}
                />
              }
            />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{
  /* <Route path="/listing/:id" element={<Listing />} />; */
}
