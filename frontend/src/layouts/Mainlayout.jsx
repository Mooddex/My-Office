import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Mainlayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Mainlayout