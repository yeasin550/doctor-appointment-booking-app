

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/HomeContent/Navbar/Navbar';
import Footer from '../Components/HomeContent/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const hideNavFooter = location.pathname === "/login" || location.pathname === "/register";
    return (
        <div>
            {!hideNavFooter && <Navbar />}
            <Outlet />
            {!hideNavFooter && <Footer/> }
        </div>
    );
};

export default Main;