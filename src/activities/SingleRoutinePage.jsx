import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function SingleRoutinePage() {
  const { routineId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const { data, loading, error } = useQuery(
    `/routines/${routineId}`,
    `routine-${routineId}`
  );
  const { mutate: deleteRoutine, loading: deleting, error: deleteError } = useMutation(
    "DELETE",
    `/routines/${routineId}`,
    ["routines"]
  );

  if (loading) return <p>Loading routine…</p>;
  if (error) return <output role="alert">{error}</output>;

  const routine = data.routine || data;

  return (
    <>
      <h1>{routine.name}</h1>
      <p>by {routine.creatorName}</p>
      <p>{routine.goal}</p>

      {routine.activities?.length > 0 && (
        <>
          <h2>Sets</h2>
          <ul>
            {routine.activities.map((act) => (
              <li key={act.routineActivityId}>
                {act.name} × {act.count}
              </li>
            ))}
          </ul>
        </>
      )}

      {token && (
        <>
          <button
            onClick={async () => {
              await deleteRoutine();
              navigate("/routines");
            }}
            disabled={deleting}
          >
            {deleting ? "Deleting…" : "Delete Routine"}
          </button>
          {deleteError && <output role="alert">{deleteError}</output>}
        </>
      )}
    </>
  );
}