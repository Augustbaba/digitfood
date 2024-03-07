import React, { useState } from "react";
import '../styles/Add_resto.css'
import Searchbar from "./Searchbar";
import SidebarAdmin from "./SidebarAdmin";

function Activer_abn() {
    const [formData, setFormData] = useState({
        restaurant: "",
        abonnementType: "",
        date: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données au backend pour activer l'abonnement
        console.log("Données du formulaire :", formData);
        // Réinitialiser les champs du formulaire après la soumission
        setFormData({
            restaurant: "",
            abonnementType: "",
            date: ""
        });
    };

    return (
        <div className="ActiverAbn">
            <SidebarAdmin/>
            <Searchbar/>
            <h2>Activer un abonnement</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label>Restaurant :</label>
                    <input type="text" name="restaurant" value={formData.restaurant} onChange={handleChange} required />
                </div>
                <div className="formGroup">
                    <label>Type d'abonnement :</label>
                    <select name="abonnementType" value={formData.abonnementType} onChange={handleChange} required>
                        <option value="">Sélectionner le type d'abonnement</option>
                        <option value="Premium">Premium</option>
                        <option value="Standard">Standard</option>
                        <option value="Basique">Basique</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label>Date :</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <button type="submit">Activer</button>
            </form>
        </div>
    );
}

export default Activer_abn;
