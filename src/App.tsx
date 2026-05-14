/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Masalah from "./pages/Masalah";
import Solusi from "./pages/Solusi";
import Keunikan from "./pages/Keunikan";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-black antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/masalah" element={<Masalah />} />
            <Route path="/solusi" element={<Solusi />} />
            <Route path="/keunikan" element={<Keunikan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

