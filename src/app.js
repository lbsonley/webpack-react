import React, { useState } from "react";
import "./assets/css/style.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    setCounter(counter + 1);
  }, 1000);

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1>Title</h1>
      <span>{counter}</span>
    </div>
  );
};

export default App;
