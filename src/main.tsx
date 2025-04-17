import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/Main.css";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import Diseases from "./pages/heart-diseases/Diseases.tsx";
import Quiz from "./pages/interactive-quiz/Quiz.tsx";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

/* ARRITMIA */
import Arrhythmia from "./pages/heart-diseases/arrhythmia/Arrhythmia.tsx";
import ArrhythmiaWhatIs from "./pages/heart-diseases/arrhythmia/sections/WhatIs.tsx";
import ArrhythmiaSymptoms from "./pages/heart-diseases/arrhythmia/sections/Symptoms.tsx";
import ArrhythmiaTreatment from "./pages/heart-diseases/arrhythmia/sections/Treatment.tsx";
import ArrhythmiaPrevention from "./pages/heart-diseases/arrhythmia/sections/Prevention.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="enfermedades-corazon" element={<Diseases />} />
        <Route path="enfermedades-corazon/arritmia" element={<Arrhythmia />} >
          <Route path="que-es" element={<ArrhythmiaWhatIs />} />
          <Route path="sintomas" element={<ArrhythmiaSymptoms />} />
          <Route path="tratamiento" element={<ArrhythmiaTreatment />} />
          <Route path="prevencion" element={<ArrhythmiaPrevention />} />
        </Route>
        <Route path="quiz" element={<Quiz />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
