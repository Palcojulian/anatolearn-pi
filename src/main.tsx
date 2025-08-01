import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./assets/css/Main.css";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/home/Home.tsx";
import Diseases from "./pages/heart-diseases/Diseases.tsx";
import AboutUs from "./pages/about-us/AboutUs.tsx";
import Sitemap from "./pages/sitemap/Sitemap.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";
import LogIn from "./pages/log-in/LogIn.tsx";
import ProfileUser from "./pages/profile-user/ProfileUser.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import PublicRoute from "./components/PublicRoute.tsx";

/* Quiz */
import Ranking from "./pages/interactive-quiz/Ranking.tsx";
import Quiz from "./pages/interactive-quiz/pages/Quiz.tsx";

/* ARRITMIA */
import Arrhythmia from "./pages/heart-diseases/arrhythmia/Arrhythmia.tsx";
import ArrhythmiaWhatIs from "./pages/heart-diseases/arrhythmia/sections/WhatIs.tsx";
import ArrhythmiaSymptoms from "./pages/heart-diseases/arrhythmia/sections/Symptoms.tsx";
import ArrhythmiaTreatment from "./pages/heart-diseases/arrhythmia/sections/Treatment.tsx";
import ArrhythmiaPrevention from "./pages/heart-diseases/arrhythmia/sections/Prevention.tsx";

/* TAKOTSUBO */
import Takotsubo from "./pages/heart-diseases/takotsubo/Takotsubo.tsx";
import TakotsuboWhatIs from "./pages/heart-diseases/takotsubo/sections/WhatIs.tsx";
import TakotsuboSymptoms from "./pages/heart-diseases/takotsubo/sections/Symptoms.tsx";
import TakotsuboTreatment from "./pages/heart-diseases/takotsubo/sections/Treatment.tsx";
import TakotsuboPrevention from "./pages/heart-diseases/takotsubo/sections/Prevention.tsx";

/* STENOSIS */
import Stenosis from "./pages/heart-diseases/stenosis/Stenosis.tsx";
import StenosisWhatIs from "./pages/heart-diseases/stenosis/sections/WhatIs.tsx";
import StenosisSymptoms from "./pages/heart-diseases/stenosis/sections/Symptoms.tsx";
import StenosisTreatment from "./pages/heart-diseases/stenosis/sections/Treatment.tsx";
import StenosisPrevention from "./pages/heart-diseases/stenosis/sections/Prevention.tsx";

/* CORONARY ARTERY */
import CoronaryArtery from "./pages/heart-diseases/coronary-artery/CoronaryArtery.tsx";
import CoronaryWhatIs from "./pages/heart-diseases/coronary-artery/sections/WhatIs.tsx";
import CoronarySymptoms from "./pages/heart-diseases/coronary-artery/sections/Symptoms.tsx";
import CoronaryTreatment from "./pages/heart-diseases/coronary-artery/sections/Treatment.tsx";
import CoronaryPrevention from "./pages/heart-diseases/coronary-artery/sections/Prevention.tsx";
import CoronaryVideo from "./pages/heart-diseases/coronary-artery/sections/Video.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/mi-perfil" element={<ProfileUser />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/iniciar-sesion" element={<LogIn />} />
        </Route>

        <Route index path="/" element={<Home />} />

        <Route path="enfermedades-corazon" element={<Diseases />} />

        <Route path="enfermedades-corazon/arritmia" element={<Arrhythmia />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<ArrhythmiaWhatIs />} />
          <Route path="sintomas" element={<ArrhythmiaSymptoms />} />
          <Route path="tratamiento" element={<ArrhythmiaTreatment />} />
          <Route path="prevencion" element={<ArrhythmiaPrevention />} />
        </Route>

        <Route path="enfermedades-corazon/takotsubo" element={<Takotsubo />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<TakotsuboWhatIs />} />
          <Route path="sintomas" element={<TakotsuboSymptoms />} />
          <Route path="tratamiento" element={<TakotsuboTreatment />} />
          <Route path="prevencion" element={<TakotsuboPrevention />} />
        </Route>

        <Route path="enfermedades-corazon/stenosis" element={<Stenosis />}>
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<StenosisWhatIs />} />
          <Route path="sintomas" element={<StenosisSymptoms />} />
          <Route path="tratamiento" element={<StenosisTreatment />} />
          <Route path="prevencion" element={<StenosisPrevention />} />
        </Route>

        <Route
          path="enfermedades-corazon/coronary-artery"
          element={<CoronaryArtery />}
        >
          <Route index element={<Navigate to="que-es" replace />} />
          <Route path="que-es" element={<CoronaryWhatIs />} />
          <Route path="sintomas" element={<CoronarySymptoms />} />
          <Route path="tratamiento" element={<CoronaryTreatment />} />
          <Route path="prevencion" element={<CoronaryPrevention />} />
          <Route path="video" element={<CoronaryVideo />} />
        </Route>

        <Route path="ranking-quiz" element={<Ranking />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="sitemap" element={<Sitemap />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
