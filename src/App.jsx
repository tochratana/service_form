import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Servicepage from "./pages/service-page";
import "./index.css";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar/Navbar";
import ServicePage from "./pages/service-page";
import UnstickyNavbar from "./components/navbar/UnstickyNavbar";
import ServiceListing from "./pages/servicelisting-page";
import { CardServiceListing } from "./components/cards/servicelisting/CardServiceListing";
import SearchPage from "./pages/search-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <ServiceListing/>
      <UnstickyNavbar />
      <Navbar />
      <Homepage />

    </div>
  );
}

export default App;
