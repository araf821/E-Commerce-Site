import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
