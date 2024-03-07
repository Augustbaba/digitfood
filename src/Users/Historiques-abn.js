// import React from "react";
import moment from "moment";
import '../styles/Add_resto.css';
import SidebarAdmin from "./SidebarAdmin";
import Searchbar from "./Searchbar";

import React, { useState, useEffect } from "react";

function Historiques_abn() {
    const [abonnements, setAbonnements] = useState([
        { id: 1, name: "Abonnement Premium", startDate: "2023-10-01", endDate: "2024-12-01" },
        { id: 2, name: "Abonnement Standard", startDate: "2023-11-15", endDate: "2024-11-15" },
        { id: 3, name: "Abonnement Basique", startDate: "2024-01-01", endDate: "2024-12-31" }
    ]);

    // Fonction pour calculer le nombre de jours restants pour un abonnement
    const getRemainingDays = (endDate) => {
        const end = moment(endDate);
        const today = moment();
        return end.diff(today, 'days');
    };

    return (
        <div className="HistoriquesAbn">
            <SidebarAdmin/>
            <Searchbar/>
            <h2>Historique des abonnements</h2>
            <div className="abonnement-container">
                {abonnements.map((abonnement) => (
                    <div className="abonnement" key={abonnement.id}>
                        <div className="abonnement-details">
                            <h3>{abonnement.name}</h3>
                            <p>Date de début : {abonnement.startDate}</p>
                            <p>Date de fin : {abonnement.endDate}</p>
                            <div className="abonnement-countdown">
                              <button>Notifier</button>
                              <p>Jours restants : {getRemainingDays(abonnement.endDate)}</p>
                           </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Historiques_abn;
