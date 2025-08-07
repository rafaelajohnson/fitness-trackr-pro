import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ActivitiesPage from "./activities/ActivitiesPage";
import SingleActivityPage from "./activities/SingleActivityPage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* redirect / → /activities */}
        <Route index element={<Navigate to="/activities" replace />} />

        {/* list & detail */}
        <Route path="activities" element={<ActivitiesPage />} />
        <Route
          path="activities/:activityId"
          element={<SingleActivityPage />}
        />

        {/* auth */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* catch-all 404 */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
