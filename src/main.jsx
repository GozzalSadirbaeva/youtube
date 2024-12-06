import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import Subnav from "./components/Subnav/index.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Subnav />
        <Main />
      </div>
    </div>
  </StrictMode>
);
