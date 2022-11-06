import { Outlet, Link } from "react-router-dom";
import Header from '../Component/Header';
import Footer from '../Component/Footer'; 
import Navbr from '../Component/Navbr'; 


const Layout = () => {
  return (
    <>
      <Header/>
      <Navbr/>
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;