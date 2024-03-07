import React from "react";
import '../styles/Board.css'
import Graph from "./Graph";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

function Board() {

    var data = [
        {
            Adresse: "62555878",
            Messages: "Atiièkè"
        },
        {
            Adresse: "69698585",
            Messages: "Atassi"
        },
        {
            Adresse: "55858585",
            Messages: "Indomi"
        },
        {
            Adresse: "69698585",
            Messages: "Atassi"
        },
        {
            Adresse: "55858585",
            Messages: "Indomi"
        }
    ]

    return (
        <div className="Board">
            <Sidebar/>
            <Searchbar/>
            <div className="PartOne">
                <div className="Graph">
                    <Graph/>
                </div>
                <div className="Message">
                    <div className="Head">
                        <h2>Messages</h2>
                        <label style={{ color: "blue", fontWeight: "700" }}>...</label>
                    </div>
                    <div className="MessageContainer">
                        {data.map((value, index) => {
                            return (
                                <div className="MessageContent" key={index}>
                                    {/* Premier élément avec une image bien encerclée */}
                                    <div className="FirstElement">
                                        {/* Insérez ici votre image encerclée */}
                                        <img src="votre_image.jpg" alt="Image encerclée" />
                                    </div>

                                    {/* Deuxième élément contenant deux div horizontaux */}
                                    <div className="SecondElement">
                                        {/* Premier div horizontal */}
                                        <div className="HorizontalDiv">
                                            <h3>{value.Adresse}</h3>
                                            
                                        </div>
                                        {/* Deuxième div horizontal */}
                                        <div className="HorizontalDiv">
                                            {/* Insérez ici votre date */}
                                            <label>{value.Messages}</label>
                                        </div>
                                    </div>

                                    {/* Troisième élément contenant la date */}
                                    <div className="ThirdElement">
                                        {/* Insérez ici votre date */}
                                        <label>15H 7 min</label>
                                    </div>
                                    
                                </div>
                                 
                            ); 
                        })}
                    </div>
                </div>
            </div>
            <div className="PartTwo">
                <div className="Gains">
                    <label>Gains</label>
                    <img src="votre_image_dollar.jpg" alt="Dollar Icon" className="DollarIcon" />
                    <div className="GainsContent">
                        <div className="HorizontalDiv">
                            <h2>5725555</h2>
                        </div>
                        <div className="HorizontalDiv">
                            
                            <label>Contenu de la deuxième information</label>
                        </div>
                    </div>
                </div>

                <div className="Gains">
                    <label>Ciffre d'Affaires</label>
                    <img src="votre_image_dollar.jpg" alt="Dollar Icon" className="DollarIcon" />
                    <div className="GainsContent">
                        <div className="HorizontalDiv">
                            <h2>5725555</h2>
                        </div>
                        <div className="HorizontalDiv">
                            <label>Contenu de l</label>
                        </div>
                    </div>
                </div>
                <div className="Menu_Stats">
                    <label>Nombre de plats</label>
                   
                    <div className="GainsContent">
                        <div className="HorizontalDiv">
                            <h1>15</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default Board;