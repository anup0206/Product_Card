import React from "react";
import Product from "./components/Product"; // Adjust path if needed

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold m-6 text-center">Product List</h1>
      <hr  className="h-1 m-4"/>
      <Product />
    </div>
  );
}

export default App;
