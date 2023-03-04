import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);
