import useQuery from "../api/useQuery";
import { Link } from "react-router-dom";

export default function ActivityList() {
  const { data, loading, error } = useQuery("/activities", "activities");
  const activities = Array.isArray(data) ? data : data?.activities || [];

  if (loading) return <p>Loading activities…</p>;
  if (error) return <output role="alert">Sorry! {error}</output>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {activities.map((act) => (
        <li key={act.id} style={{ marginBottom: "1rem" }}>
          <Link
            to={`/activities/${act.id}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0" }}>{act.name}</h3>
            <p style={{ margin: 0 }}>{act.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

