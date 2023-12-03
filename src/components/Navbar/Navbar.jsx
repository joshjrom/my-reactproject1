import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarSection}>
      <ul className={styles.navbarUl}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
