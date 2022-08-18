import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact.js";
import { Gallery } from "./pages/gallery";
import { Sealcoating } from "./pages/sealcoating.js";
import { Asphalt } from "./pages/asphaltmaintanence.js";
import { Crackfilling } from "./pages/crackfilling.js";
import { Stripingandsignage } from "./pages/stripingandsignage.js";
import { Paving } from "./pages/paving.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Gallery />} path="/gallery" />
            <Route element={<Asphalt />} path="/asphaltcareguide" />
            <Route element={<Sealcoating />} path="/sealcoating" />
            <Route element={<Crackfilling />} path="/crackfilling" />
            <Route
              element={<Stripingandsignage />}
              path="/stripingandsignage"
            />
            <Route element={<Paving />} path="/paving" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
