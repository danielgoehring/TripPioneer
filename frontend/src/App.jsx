import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./features/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchBar />
    </>
  );
}

export default App;
