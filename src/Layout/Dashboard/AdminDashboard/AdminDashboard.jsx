
import { Outlet } from "react-router-dom";
import AdminDrawer from "../../../Components/DashboardContent/Drawer/AdminDrawer";



const AdminDashboard = () => {
    
    return (
        <div className="flex h-screen w-full">
            <AdminDrawer />
            {/* Content */}
            <div className="flex-1 ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
