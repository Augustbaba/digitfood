import React, { useState } from "react";
import Logo from '../assets/Fwd_ le logo transparent/3.png';
import '../styles/SidebarAdmin.css';
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

function SidebarAdmin() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const handleAbonement = () => {
        setShowOptions(!showOptions); // Inverse l'état d'affichage des options
    };

    const handleReport = () => {
        navigate('/Rapport');
    };

    const handleDashboard = () => {
        navigate('/Dashboard');
    };
    
    const handleAdd_abn = () => {
        navigate('/Add_abn');
    };
    const handleShow_abn = () => {
        navigate('/Historiques_abn');
    };
    const handleActive_abn = () => {
        navigate('/Activer_abn');
    };

    const handleAdd_resto = () => {
        navigate('/Add_resto');
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
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                        <PieChartIcon className="Icons" onClick={handleAbonement} style={{ marginRight: "5px" }} />
                        <label onClick={handleAbonement} style={{ fontSize: "16px", cursor: "pointer" }}>Abonnement</label>
                    </div>
                    {showOptions && (
                        <div className="options" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <button onClick={handleAdd_abn} style={{ margin: "5px", fontSize: "14px" }}>Ajouter un abonnement</button>
                            <button onClick={handleShow_abn} style={{ margin: "5px", fontSize: "14px" }}>Historique abonnement</button>
                            <button onClick={handleActive_abn} style={{ margin: "5px", fontSize: "14px" }}>Activer un abonnement</button>
                        </div>
                    )}
                </div>




                <div>
                    <SettingsIcon className="Icons" />
                    <label onClick={handleAdd_resto}>Ajouter un resto</label>
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

export default SidebarAdmin;
