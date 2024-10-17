import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/userContext.jsx";
import { CartContextProvider } from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <App />
        </Router>
        {/* {" "} */}
      </CartContextProvider>
    </UserContextProvider>
  </StrictMode>
);