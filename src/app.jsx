import React, { useContext } from "preact/compat";
import Stories from "./components/Stories";
import { AppContext } from "./context";

export default function App() {
  const data = useContext(AppContext);

  return (
    <div>
      <p>Welcome to website</p>
      <h2>Basic Content Test</h2> {/* Simple output to check rendering */}
      <Stories />
    </div>
  );
}
