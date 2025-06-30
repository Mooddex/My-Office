const styles = {
  section: "bg-white py-20 mb-4",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center",
  textCenter: "text-center",
  heading: "text-4xl font-extrabold text-purple-800 sm:text-5xl md:text-6xl",
  paragraph: "my-4 text-xl text-purple-700",
};

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 className={styles.heading}>Welcome to The Office</h1>
          <p className={styles.paragraph}>
            This is now your online office 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
