import { useState, useEffect } from "react";
import "./App.css";
import SubProductRows from "@/atom/SubProductRows";

function App() {
  const [mockProductsData, setMockProductsData] = useState([]);
  const [expandIDs, setExpandIDs] = useState({ 1: false });

  useEffect(() => {
    fetch("/mockProductsData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load mockProductsData.json");
        }
        return response.json();
      })
      .then(setMockProductsData)
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <SubProductRows
        product={mockProductsData}
        expandIDs={expandIDs}
        setExpandIDs={setExpandIDs}
      />
    </>
  );
}

export default App;
