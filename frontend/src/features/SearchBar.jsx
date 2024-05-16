

function SearchBar() {
  

  return (
    <>
      <div className="px-64">
        <div className="border shadow-lg py-2 pl-8 pr-2 rounded-full mt-10 ">
          <div className="flex">
            <div>
              <label>Destination</label>
              <input placeholder="Find destinations"
              className="placeholder:text-sm" />
            </div>
            <div className="border-l border-l-2 border-l-gray-100 ">
              <div className="ml-4">
                <label>Check in time</label>
                <input placeholder="Add check in dates"
                className="placeholder:text-sm" />
              </div>
            </div>
            <div className="border-l border-l-2 border-l-gray-100">
              <div className="ml-4">
                <label>Check out time</label>
                <input placeholder="Add check out dates"
                className="placeholder:text-sm" />
              </div>
            </div>
            <div className="border-l border-l-2 border-l-gray-100">
              <div className="ml-4">
                <label>Guests</label>
                <input placeholder="Add guests"
                className="placeholder:text-sm" />
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
