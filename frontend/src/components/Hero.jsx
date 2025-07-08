const styles = {
  section: "bg-gradient-to-b from-purple-50 to-white py-20 mb-4",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center",
  heading: "text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-800",
  paragraph: "my-6 text-lg sm:text-xl text-purple-700 max-w-2xl",
  button: "mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg shadow transition duration-300",
};

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Welcome to The Office</h1>
        <p className={styles.paragraph}>
          This is now your online office <br /> manage clients, track cases, and stay organized with ease.
        </p>
      </div>
    </section>
  );
};

export default Hero;
