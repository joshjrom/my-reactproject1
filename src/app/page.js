import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <nav className={styles.navbarSection}>
        <Navbar />
      </nav>
    </main>
  );
};

export default Home;
