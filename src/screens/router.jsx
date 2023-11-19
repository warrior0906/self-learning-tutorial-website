import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./home/home";
import SubjectsListScreen from "./subjectsList/subjectsList";
import SubjectScreen from "./subject/subject";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="subjectsList" element={<SubjectsListScreen />} />
        <Route path="subject" element={<SubjectScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
