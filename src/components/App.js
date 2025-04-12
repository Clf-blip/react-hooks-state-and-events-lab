import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable 
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode 
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Determine class 
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
