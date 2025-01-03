import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//brand font
import "../src/fonts/Playwrite_HU/PlaywriteHU-VariableFont_wght.ttf";

//title font
import "../src/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf";

//body font 1
import "../src/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf";

//body font 2
import "../src/fonts/Nunito/Nunito-VariableFont_wght.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
