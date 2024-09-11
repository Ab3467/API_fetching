import { useEffect } from "preact/hooks";
import React from "react";

export default function Stories() {
  let API = "https://hn.algolia.com/api/v1/search?query=html";

  async function fetchApi(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchApi(API);
  }, []);

  return <div></div>;
}
