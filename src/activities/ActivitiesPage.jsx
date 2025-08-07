// src/activities/ActivitiesPage.jsx
import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";

export default function ActivitiesPage() {
  // We don't need token here unless you plan to show the form
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {/* If you want the add form on this page: */}
      {/* {token && <ActivityForm />} */}
    </>
  );
}
