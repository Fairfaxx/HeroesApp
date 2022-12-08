import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Fefe</span>
          <button className="btn nav-item nav-link">Logout</button>
          {/* <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/login"
          >
            Logout
          </NavLink> */}
        </ul>
      </div>
    </nav>
  );
};
