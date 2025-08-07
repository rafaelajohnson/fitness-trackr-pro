import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ActivitiesPage from "./activities/ActivitiesPage";
import SingleActivityPage from "./activities/SingleActivityPage";
import RoutinesPage from "./activities/RoutinesPage";
import SingleRoutinePage from "./activities/SingleRoutinePage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Redirect / → /activities */}
        <Route index element={<Navigate to="/activities" replace />} />

        {/* Activities */}
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:activityId" element={<SingleActivityPage />} />

        {/* Routines */}
        <Route path="routines" element={<RoutinesPage />} />
        <Route path="routines/:routineId" element={<SingleRoutinePage />} />

        {/* Auth */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
