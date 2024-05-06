import { useState } from "react";
import Logo from "../assets/TripPioneer_logo.png";
import "../index.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-8 pb-6">
        <div className="px-24">
          <div className="flex justify-between">
            <div>
              <img src={Logo} alt="logo" />
            </div>

            <div className="flex">
              <div>0</div>
              <div className="ml-2">Icon</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
