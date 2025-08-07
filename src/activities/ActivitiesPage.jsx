import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {/* (Add-Activity form lives on routines workshop, not here) */}
    </>
  );
}
