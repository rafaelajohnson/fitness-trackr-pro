// src/activities/SingleActivityPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function SingleActivityPage() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  // Fetching the activity directly—data === activity object
  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${activityId}`, `activity-${activityId}`);

  // Delete mutation
  const {
    mutate: deleteActivity,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activityId}`, ["activities"]);

  if (loading) return <p>Loading activity…</p>;
  if (error || !activity)
    return <output role="alert">{error || "Activity not found"}</output>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>
        <em>by {activity.creatorName}</em>
      </p>
      <p>{activity.description}</p>

      {token && (
        <>
          <button
            onClick={async () => {
              await deleteActivity();
              navigate("/activities");
            }}
            disabled={deleting}
          >
            {deleting ? "Deleting…" : "Delete Activity"}
          </button>
          {deleteError && <output role="alert">{deleteError}</output>}
        </>
      )}
    </>
  );
}
