import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./components/CurrencyDropdown";
import CurrencyContext from './contexts/CurrencyContext.js';

function App() {
  const [count, setCount] = useState(0);
  return (
    <CurrencyContext.Provider>
      <h1>Currency Converter ver2</h1>
      <CurrencyDropdown />
    </CurrencyContext.Provider>
  );
}

export default App;
