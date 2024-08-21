import "../index.css";

function SearchBar() {
  return (
    <>
      <div className="flex justify-center searchBar-sm dispNoneListing">
        <div className="border shadow-lg py-2 pl-8 pr-2 rounded-full mt-10 searchBar-m ">
          <div className="flex-grow flex items-center ">
            <div className="text-left px-4 searchBar-pa">
              <label className="block text-xs font-semibold searchFont">
                Destination
              </label>
              <input
                placeholder="Find destinations"
                className="placeholder:text-sm w-full"
              />
            </div>
            <div className="border-l border-l-2 border-l-gray-100 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold">
                  Check in time
                </label>
                <input
                  placeholder="Add check in dates"
                  className="placeholder:text-sm w-full"
                />
              </div>
            </div>
            <div className="border-l border-gray-200 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold">
                  Check out time
                </label>
                <input
                  placeholder="Add check out dates"
                  className="placeholder:text-sm w-full"
                />
              </div>
            </div>
            <div className="border-l border-gray-200 px-4 flex items-center sb-xs">
              <div className="text-left">
                <label className="block text-xs font-semibold">Guests</label>
                <input
                  placeholder="Add guests"
                  className="placeholder:text-sm w-full"
                />
              </div>
            </div>

            <button className="border rounded-full bg-emerald-500 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
