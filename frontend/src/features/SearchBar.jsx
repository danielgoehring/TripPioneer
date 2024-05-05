import { useState } from "react";

function SearchBar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-80">
        <div className="border shadow-lg py-2 px-8 rounded-full mt-10">
          <div className="flex">
            <div>
              <label>Destination</label>
              <input />
            </div>
            <div>
              <label>Check in time</label>
              <input />
            </div>
            <div>
              <label>Check out time</label>
              <input />
            </div>
            <div>
              <label>Guests</label>
              <input />
            </div>
            <button>search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
