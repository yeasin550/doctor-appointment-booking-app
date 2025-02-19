

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/HomeContent/Navbar/Navbar';
import Footer from '../Components/HomeContent/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;