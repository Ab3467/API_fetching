import React, { useEffect } from "react";  // Correct import for React hooks

export default function Stories() {
  let API = "https://hn.algolia.com/api/v1/search?query=html";
  
  async function fetchApi(url) {
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log("Fetched data: ", data);  // Log fetched data
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }
  

  useEffect(() => {
    fetchApi(API);
  }, []);

  return <div>
    <h1>Stories</h1>
  </div>;
}
