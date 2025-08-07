import useQuery from "../api/useQuery";
import { Link } from "react-router-dom";

export default function RoutinesPage() {
  const { data, loading, error } = useQuery("/routines", "routines");
  const routines = Array.isArray(data) ? data : data?.routines || [];

  if (loading) return <p>Loading routines…</p>;
  if (error)   return <output role="alert">Sorry! {error}</output>;

  return (
    <ul className="card-list">
      {routines.map((r) => (
        <li key={r.id}>
          <Link to={`/routines/${r.id}`} className="card-link">
            <h3>{r.name}</h3>
            <p><strong>Goal:</strong> {r.goal}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
