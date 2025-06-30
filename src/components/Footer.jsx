
const style ={
nav: "fixed bottom-0 w-full bg-gray-100 border-t border-purple-200 shadow-inner",
     container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
     wrapper: "flex flex-col md:flex-row items-center justify-between py-2 gap-4",

}

const Footer = () => {
  return (
    <>
    <nav className={style.nav} >
        <div className={style.container} >
            <div className={style.wrapper} >
                <p 
                className="copyright  text-blue-950 "                
                > <a
                href="https://mahmoud-salama.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-600 hover:underline ml-1" 
                >&copy;Mahmoud Salama.</a> All rights reserved.</p>
            </div>
        </div>
    </nav>
        </>
  )
}

export default Footer