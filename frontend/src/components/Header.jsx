import { useState } from "react";
import "../index.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-24">
        <div className="flex justify-between">
          <div>TripPioneer</div>

          <div className="flex">
            <div>0</div>
            <div className="ml-2">Icon</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
