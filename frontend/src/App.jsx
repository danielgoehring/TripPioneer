import { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./features/SearchBar";
import HomePage from "./pages/HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchBar />
      <HomePage />
    </>
  );
}

export default App;
