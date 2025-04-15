import { Outlet } from "react-router-dom";
import DoctorDrawer from "../../../Components/DashboardContent/Drawer/DoctorDrawer";



const DoctorDashboard = () => {
    
    return (
        <div className="flex h-screen w-full">
            <DoctorDrawer />
            {/* Content */}
            <div className="flex-1 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default DoctorDashboard;
