import { useAuth } from "../auth/AuthContext";
import ActivityList from "./ActivityList";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {/* Add-activity form is in the Routines workshop */}
    </>
  );
}
