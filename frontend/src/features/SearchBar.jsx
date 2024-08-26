import "../index.css";
import React, { useState } from "react";

function SearchBar({
  onButtonClick,
  dateSync,
  guestAmount,
  checkInDateprop,
  checkOutDateprop,
  daysBetween,
  today,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkin, setCheckin] = useState(checkInDateprop);
  const [checkout, setCheckout] = useState(checkOutDateprop);
  const [numOfGuests, setNumOfGuests] = useState("1 guest");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckinDate = (event) => {
    const newCheckin = event.target.value;
    setCheckin(newCheckin);
    dateSync(newCheckin, checkout);
  };

  const handleCheckoutDate = (event) => {
    const newCheckout = event.target.value;
    setCheckout(newCheckout);
    dateSync(checkin, newCheckout);
  };

  const handleNumOfGuests = (event) => {
    setNumOfGuests(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(selectedOption);
    dateSync(checkin, checkout);
    guestAmount(numOfGuests);
  };

  // const handledatesync = () => {
  //   dateSync(checkin, checkout);
  // };
  return (
    <>
      <div className="flex justify-center searchBar-sm dispNoneListing">
        <div className="border shadow-lg py-2 pl-8 pr-2 rounded-full mt-10 searchBar-m ">
          <div className="flex-grow flex items-center ">
            <div className="text-left px-4 searchBar-pa">
              <label className="block text-xs font-semibold searchFont ml-1">
                Destination
              </label>
              <select
                placeholder="Find destinations"
                className="text-sm text-gray-400"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option value="">Select an option</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="lake">Lake</option>
                <option value="camp">Camp</option>
              </select>
            </div>
            <div className="border-l border-l-2 border-l-gray-100 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold ml-1">
                  Check in time
                </label>
                <input
                  type="date"
                  className="p-1 w-full text-sm text-gray-400"
                  value={checkin}
                  onChange={handleCheckinDate}
                  min={today}
                />
              </div>
            </div>
            <div className="border-l border-gray-200 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold ml-1">
                  Check out time
                </label>
                <input
                  type="date"
                  className="p-1 w-full text-sm text-gray-400"
                  value={checkout}
                  onChange={handleCheckoutDate}
                  min={today}
                />
              </div>
            </div>
            <div className="border-l border-gray-200 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold ml-1">
                  Guests
                </label>
                <select
                  className="py-1 w-full text-sm text-gray-400"
                  onChange={handleNumOfGuests}
                  value={numOfGuests}
                >
                  <option value="1 guest">Add guest</option>
                  <option value="1 guest">1 guest</option>
                  <option value="2 guests">2 guests</option>
                  <option value="3 guests">3 guests</option>
                  <option value="4 guests">4 guests</option>
                </select>
              </div>
            </div>

            <button
              className="border rounded-full bg-emerald-500 p-4"
              onClick={handleButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                w
                fill="currentColor"
                class="bi bi-search text-white"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
