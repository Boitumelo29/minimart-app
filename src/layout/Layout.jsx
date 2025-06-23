import { Outlet } from 'react-router-dom';
import Navbar from '../componets/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;