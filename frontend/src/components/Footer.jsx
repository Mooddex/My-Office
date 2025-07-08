const style = {
  nav: "fixed bottom-0 w-full bg-gray-100 border-t border-purple-200 shadow-inner z-50",
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
  wrapper: "flex flex-col md:flex-row items-center justify-center md:justify-between py-3 text-sm text-blue-950",
};

const Footer = () => {
  return (
    <footer className={style.nav}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} 
            <a
              href="https://mahmoud-salama.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline ml-1"
            >
              Mahmoud Salama
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
