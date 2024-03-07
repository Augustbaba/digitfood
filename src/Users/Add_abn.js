import React, { useState } from "react";
import '../styles/Add_resto.css'


import Searchbar from "./Searchbar";
import SidebarAdmin from "./SidebarAdmin";

function Add_abn() {
    const [subscriptionInfo, setSubscriptionInfo] = useState({
        type: "",
        duration: "",
        price: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubscriptionInfo({ ...subscriptionInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les informations de l'abonnement à votre backend ou effectuer d'autres actions nécessaires
        console.log("Informations de l'abonnement :", subscriptionInfo);
        // Réinitialiser les champs du formulaire après la soumission
        setSubscriptionInfo({
            type: "",
            duration: "",
            price: "",
            description: ""
        });
    };

    return (
        <div className="add-subscription">
            <SidebarAdmin />
            <Searchbar />
            <div className="add-subscription-form">
                <h2>Ajouter un nouvel abonnement</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label>Type d'offre *</label>
                        <select name="type" value={subscriptionInfo.type} onChange={handleChange} required>
                            <option value="">Sélectionner le type d'offre</option>
                            <option value="mensuel">Mensuel</option>
                            <option value="annuel">Annuel</option>
                            <option value="trimestriel">Trimestriel</option>
                            {/* Ajoutez d'autres options au besoin */}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label>Durée *</label>
                        <input type="text" name="duration" value={subscriptionInfo.duration} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label>Prix *</label>
                        <input type="text" name="price" value={subscriptionInfo.price} onChange={handleChange} required />
                    </div>
                    <div className="formGroup">
                        <label>Description</label>
                        <textarea name="description" value={subscriptionInfo.description} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
}

export default Add_abn;
