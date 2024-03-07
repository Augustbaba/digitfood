import React, { useState } from "react";
import Logo from '../assets/Fwd_ le logo transparent/3.png';
import '../styles/Sidebar.css';
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleReport = () => {
        navigate('/Rapport');
    };

    const handleDashboard = () => {
        navigate('/Dashboard');
    };

    const handleSales = () => {
        navigate('/Ventes');
    };

    const handleLogout = () => {
        localStorage.removeItem('kitchen');
        navigate('/');
    };

    return (
        <div className="sidebar">
            {/* <MenuIcon className="MenuIcon" onClick={() => setMenuOpen(!menuOpen)} /> */}
            <div className="sidebar-Logo">
                    <img src={Logo} alt="Logo" className="logo-image" style={{ width: '180px', height: '100px' }}/>
                    
            </div>

            <div className={menuOpen ? "leftSidebar open" : "leftSidebar"}>
                <div>
                    <DashboardIcon className="Icons" />
                    <label onClick={handleDashboard}>Dashboard</label>
                </div>
                <div>
                    <BarChartIcon className="Icons" />
                    <label onClick={handleReport}>Rapport</label>
                </div>
                <div>
                    <PieChartIcon className="Icons" />
                    <label onClick={handleSales}>Ventes</label>
                </div>
                <div>
                    <SettingsIcon className="Icons" />
                    <label>Options</label>
                </div>
            </div>
            <div className="rightSidebar">
                <div>
                    <NotificationsIcon className="Icons" />
                    <label>Notification</label>
                </div>
                <div>
                    <MessageIcon className="Icons" />
                    <label>Message</label>
                </div>
                <div>
                    <LogoutIcon className="Icons" />
                    <label onClick={handleLogout}>Déconnexion</label>
                </div>
            </div>
            <div className="Help">
                <div>
                    <HelpIcon className="Icons" />
                    <label>Aide</label>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
