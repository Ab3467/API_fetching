import React from "preact/compat";
import Stories from "./components/Stories";


export default function App() {
  return (
    <div>
      <p>Welcome to website</p>
      <h2>Basic Content Test</h2> {/* Simple output to check rendering */}
      <Stories/>
    </div>
  );
}
