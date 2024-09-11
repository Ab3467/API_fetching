import React, { useContext } from "preact/compat";
import Stories from "./components/Stories";
import AppProvider, { AppContext } from "./context";

export default function App() {
  const data = useContext(AppContext);

  return (
    <AppProvider>
      <p>Welcome to {data}</p>
      <h2>Basic Content Test</h2> {/* Simple output to check rendering */}
      <Stories />
    </AppProvider>
  );
}
