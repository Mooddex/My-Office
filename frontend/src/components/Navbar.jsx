import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/imgaes/logo.jpg';
import { FiLogOut } from "react-icons/fi";

const styles = {
  nav: "bg-white border-b border-purple-200 shadow-md",
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  wrapper: "flex h-20 items-center justify-between",
  logoGroup: "flex items-center gap-3",
  logo: "h-10 w-auto",
  logoText: "text-purple-800 text-xl sm:text-2xl font-bold",
  links: "flex items-center gap-3 sm:gap-4",
};

const linkClass = ({ isActive }) =>
  isActive
    ? "bg-purple-700 text-white rounded-md px-3 py-2 transition duration-200 font-medium"
    : "text-purple-700 hover:bg-purple-100 hover:text-purple-900 rounded-md px-3 py-2 transition duration-200 font-medium";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        navigate("/login");
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
      alert("Something went wrong while logging out");
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Logo & Brand */}
          <div className={styles.logoGroup}>
            <NavLink to="/">
              <img src={logo} alt="My Office" className={styles.logo} />
            </NavLink>
            <span className={styles.logoText}>My Office</span>
          </div>

          {/* Navigation Links & Logout */}
          <div className={styles.links}>
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/cases" className={linkClass}>Cases</NavLink>
            <NavLink to="/clients" className={linkClass}>Clients</NavLink>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-800 text-white font-medium px-4 py-2 rounded-md shadow-sm transition duration-200"
            >
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
