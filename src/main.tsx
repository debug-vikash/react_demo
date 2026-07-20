import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import AboutUs from "./pages/aboutUs.tsx";
import Course from "./pages/course.tsx";
import Students from "./pages/students.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
        <Route path="" element={<App />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
