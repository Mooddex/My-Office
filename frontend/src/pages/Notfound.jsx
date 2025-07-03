import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';



const styles= {
    section: "min-h-screen flex flex-col items-center justify-center text-center p-4",
    h1: "text-4xl font-bold text-red-600 mb-4",
    p: "text-lg text-gray-700",
};

const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className={styles.h1}>404 Not Found</h1>
      <p className={styles.p}>This page does not exist</p>
      <Link
        to='/'
        className='text-white bg-purple-700 hover:bg-purple-900 rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
