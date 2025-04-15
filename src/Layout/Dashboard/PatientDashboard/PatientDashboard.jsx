import { Outlet } from "react-router-dom";
import PatientDrawer from "../../../Components/DashboardContent/Drawer/PatientDrawer";



const PatientDashboard = () => {
    
    return (
        <div className="flex h-screen w-full">
            <PatientDrawer />
            {/* Content */}
            <div className="flex-1 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default PatientDashboard;
