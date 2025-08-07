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
  const {
    mutate: deleteRoutine,
    loading: deleting,
    error: deleteError,
  } = useMutation("DELETE", `/routines/${routineId}`, ["routines"]);

  if (loading) return <p>Loading routine…</p>;
  if (error)   return <output role="alert">{error}</output>;

  // `data` is the routine object with its `sets` array
  const routine = data;

  return (
    <>
      <h1>{routine.name}</h1>
      <p><em>by {routine.creatorName}</em></p>
      <p>{routine.goal}</p>

      {routine.sets?.length > 0 && (
        <>
          <h2>Sets</h2>
          <ul className="card-list">
            {routine.sets.map((set) => (
              <li key={set.id}>
                {set.name} × {set.count}
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
