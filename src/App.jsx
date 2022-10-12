import React, { useState, useEffect } from "react";
import Styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Main/Nav/Nav";
import Landing from "./Pages/Landing/Landing";
import NavigationIcon from "@mui/icons-material/Navigation";

// Dynamic Page Import Start
import ChickenDetails from "./Dynamic-Pages/ChickenDetails";
import BeefDetails from "./Dynamic-Pages/BeefDetails";
import PorkDetails from "./Dynamic-Pages/PorkDetails";
import MuttonDetails from "./Dynamic-Pages/MuttonDetails";
// Dynamic Page Import End

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path={"/"} element={<Landing />} />

          {/* Dynamic Routes Start */}
          <Route path={"/Chicken/:id"} element={<ChickenDetails />} />
          <Route path={"/Beef/:id"} element={<BeefDetails />} />
          <Route path={"/Pork/:id"} element={<PorkDetails />} />
          <Route path={"/Mutton/:id"} element={<MuttonDetails />} />
          {/* Dynamic Routes End */}
        </Routes>

        <NavigationIcon
          onClick={scrollUp}
          sx={{ fontSize: 30 }}
          className={`${Styles.Back_To_Top_Icon} ${
            backToTop ? Styles.Show_Back_To_Top : ""
          }`}
        />

        {/* <Footer scrollUp={scrollUp} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;