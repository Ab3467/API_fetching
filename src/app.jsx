import React from "preact/compat";
import Stories from "./components/Stories";
import AppProvider, { useGlobalContext } from "./context";

export default function App() {

  let data = useGlobalContext();

  return (
    <AppProvider>
      <p>Welcome to {data}</p>
      <h2>Basic Content Test</h2> {/* Simple output to check rendering */}
      <Stories />
    </AppProvider>
  );
}
