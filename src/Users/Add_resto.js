import React, { useState } from "react";
import '../styles/Add_resto.css'


import Searchbar from "./Searchbar";
import SidebarAdmin from "./SidebarAdmin";

function Add_resto() {
    const [restaurantInfo, setRestaurantInfo] = useState({
        name: "",
        city: "",
        RCCM: "",
        location: "",
        openingHours: "",
        closingHours: "",
        type: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurantInfo({ ...restaurantInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les informations du restaurant à votre API ou effectuer d'autres actions nécessaires
        console.log("Informations du restaurant :", restaurantInfo);
        // Réinitialiser les champs du formulaire après la soumission
        setRestaurantInfo({
            name: "",
            city: "",
            RCCM: "",
            location: "",
            openingHours: "",
            closingHours: "",
            type: ""
        });
    };

    return (
        <div className="Board">
            <SidebarAdmin/>
            <Searchbar/>
            <div className="AddRestaurantForm">
                <h2 style={{ textAlign:'center' }}>Ajouter un nouveau restaurant</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label>Nom du restaurant *</label>
                        <input type="text" name="name" value={restaurantInfo.name} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label>Ville *</label>
                        <select name="city" value={restaurantInfo.city} onChange={handleChange} required>
                            <option value="">Sélectionner la ville</option>
                            <option value="Paris">Paris</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Marseille">Marseille</option>
                            {/* Ajoutez d'autres options selon vos besoins */}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label>RCCM</label>
                        <input type="text" name="RCCM" value={restaurantInfo.RCCM} onChange={handleChange} />
                    </div>
                    <div className="formGroup">
                        <label>Emplacement</label>
                        <input type="text" name="location" value={restaurantInfo.location} onChange={handleChange} />
                    </div>
                    <div className="formGroup">
                        <label>Heures d'ouverture *</label>
                        <input type="time" name="openingHours" value={restaurantInfo.openingHours} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label>Heures de fermeture *</label>
                        <input type="time" name="closingHours" value={restaurantInfo.closingHours} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label>Type de restaurant</label>
                        <select name="type" value={restaurantInfo.type} onChange={handleChange}>
                            <option value="">Sélectionner le type</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="hotel">Hôtel</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <button type="submit" style={{ textAlign:'center' }}>Ajouter</button>
                    <button type="submit" style={{ textAlign:'center' }}>Supprimer</button>
                </form>
            </div>
        </div>
    );
}

export default Add_resto;
