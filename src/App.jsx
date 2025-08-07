import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ActivitiesPage from "./activities/ActivitiesPage";
import SingleActivityPage from "./activities/SingleActivityPage";
import RoutinesPage from "./activities/RoutinesPage";
import SingleRoutinePage from "./activities/SingleRoutinePage.jsx/index.js";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>        
        <Route index element={<Navigate to="/activities" replace />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:activityId" element={<SingleActivityPage />} />
        <Route path="routines" element={<RoutinesPage />} />
        <Route path="routines/:routineId" element={<SingleRoutinePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}