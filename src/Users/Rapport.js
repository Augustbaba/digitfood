import React from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import '../styles/Rapport.css';

function Report() {
    // Exemple de données pour le rapport
    const orders = [
        { id: 1, status: "En cours de traitement", date: "2024-03-01", total: 50 },
        { id: 2, status: "Livré", date: "2024-02-28", total: 75 },
        { id: 3, status: "Validé", date: "2024-02-27", total: 100 },
        // Ajoutez d'autres commandes selon vos besoins
    ];

    return (
        <div className="Report">
            <Sidebar />
            <Searchbar />
            <div className="Command">
                <h2>Statut des commandes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Statut</th>
                            <th>Total</th>
                            <th>Afficher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td>{order.total}</td>
                                <button>Detaille</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Report;
