import { Link } from "react-router-dom";

const DashboardNav = () => {
  const activePath = window.location.pathname;
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${activePath === "/dashboard" && "active"}`}
          to="/dashboard"
        >
          Your bookings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            activePath === "/dashboard/seller" && "active"
          }`}
          to="/dashboard/seller"
        >
          Your hotels
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
