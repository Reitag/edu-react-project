import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.module.css";
import "./variables.css";
import { App } from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
