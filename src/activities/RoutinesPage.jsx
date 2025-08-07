import useQuery from "../api/useQuery";
import { Link } from "react-router-dom";

export default function RoutinesPage() {
  const { data, loading, error } = useQuery("/routines", "routines");
  const routines = Array.isArray(data) ? data : data?.routines || [];

  if (loading) return <p>Loading routines…</p>;
  if (error) return <output role="alert">Sorry! {error}</output>;

  return (
    <>
      <h1>Routines</h1>
      <ul>
        {routines.map((r) => (
          <li key={r.id}>
            <Link to={`/routines/${r.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>{r.name}</h3>
              <p style={{ margin: 0 }}><em>Goal:</em> {r.goal}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
