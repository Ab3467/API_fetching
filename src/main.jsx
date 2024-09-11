import React from "react";
import ReactDOM from "react-dom";
import App from "./app"; // Import the App component
import AppProvider from "./context";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')  // Ensure 'root' matches the ID in your index.html
);
