import { useState } from "react";
import Logo from "../assets/TripPioneer_logo.png";
import "../index.css";

function Header() {
  return (
    <>
      <div className="pt-8 pb-6">
        <div className="px-4">
          <div className="flex justify-between items-center">
            <div>
              <img src={Logo} alt="logo" />
            </div>

            <div className="flex">
              <div className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-person-circle text-slate-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
