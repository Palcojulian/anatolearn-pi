import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/Main.css";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import Diseases from "./pages/heart-diseases/Diseases.tsx";
import Quiz from "./pages/interactive-quiz/Quiz.tsx";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/enfermedades-corazon" element={<Diseases />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
