// src/activities/SingleActivityPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function SingleActivityPage() {
  const { activityId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  // Fetch just this one activity
  const { data, loading, error } = useQuery(
    `/activities/${activityId}`,
    `activity-${activityId}`
  );
  const { mutate: deleteActivity, loading: deleting, error: deleteError } =
    useMutation("DELETE", `/activities/${activityId}`, ["activities"]);

  if (loading) return <p>Loading activity…</p>;
  if (error) return <output role="alert">{error}</output>;

  const activity = data.activity || data;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>by {activity.creatorName}</p>
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
