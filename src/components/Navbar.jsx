import { NavLink } from 'react-router-dom';
import logo from '../assets/imgaes/logo.jpg'

const styles = {
  nav: "bg-white border-b border-purple-200 shadow",
  container: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
  wrapper: "flex h-20 items-center justify-between",
  brandGroup: "flex flex-1 items-center justify-center md:items-stretch md:justify-start",
  logo: "flex flex-shrink-0 items-center mr-4",
  logoText: "hidden md:block text-purple-800 text-2xl font-bold ml-2",
  links: "flex space-x-2",
};

const linkClass = ({ isActive }) =>
  isActive
    ? "bg-purple-700 text-white rounded-md px-3 py-2 transition-colors duration-200"
    : "text-purple-700 hover:bg-purple-100 hover:text-purple-900 rounded-md px-3 py-2 transition-colors duration-200";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.brandGroup}>
            <NavLink to="/" className={styles.logo}>
              <img
                className="h-10 w-auto"
                src={logo}
                alt="My Office"
              />
              <span className={styles.logoText}>My Office</span>
            </NavLink>

            <div className="md:ml-auto">
              <div className={styles.links}>
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/cases" className={linkClass}>Cases</NavLink>
                <NavLink to="/clients" className={linkClass}>Clients</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
