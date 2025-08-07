import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import { Link } from "react-router-dom";

export default function ActivityList() {
  const { data, loading, error } = useQuery("/activities", "activities");
  const activities = Array.isArray(data) ? data : data?.activities || [];

  if (loading) return <p>Loading activities…</p>;
  if (error) return <output role="alert">Sorry! {error}</output>;

  return (
    <ul>
      {activities.map((act) => (
        <li key={act.id} style={{ marginBottom: "1rem" }}>
          <Link to={`/activities/${act.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{act.name}</h3>
            <p>{act.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
