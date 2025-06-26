import { Outlet } from 'react-router-dom';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;