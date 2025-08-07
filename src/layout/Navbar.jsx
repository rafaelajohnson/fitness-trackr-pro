import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/activities");
  };

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activities" className={({ isActive }) => isActive ? "active" : ""}>
          Activities
        </NavLink>
        <NavLink to="/routines"   className={({ isActive }) => isActive ? "active" : ""}>
          Routines
        </NavLink>
        {token ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <>
            <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
              Register
            </NavLink>
            <NavLink to="/login"    className={({ isActive }) => isActive ? "active" : ""}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}


