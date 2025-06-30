


import { Link } from "react-router-dom";

const styles = {
  section: "py-4 bg-white",
  container: "container-xl lg:container m-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4",
  card: "bg-purple-100 p-6 rounded-lg shadow-md",
  heading: "text-2xl font-bold text-purple-800",
  paragraph: "mt-2 mb-4 text-purple-700",
  button: "inline-block bg-purple-700 text-white rounded-lg px-4 py-2 hover:bg-purple-800 transition-colors duration-200",
};

const Card = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Cases Card */}
          <div className={styles.card}>
            <h2 className={styles.heading}>Cases</h2>
            <p className={styles.paragraph}>
              View and manage your current cases.
            </p>
            <Link to="/cases" className={styles.button}>
              View Cases
            </Link>
          </div>

          {/* Clients Card */}
          <div className={styles.card}>
            <h2 className={styles.heading}>Clients</h2>
            <p className={styles.paragraph}>
              Add  your clients .
            </p>
            <Link to="/add-client" className={styles.button}>
              Add New Client
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
