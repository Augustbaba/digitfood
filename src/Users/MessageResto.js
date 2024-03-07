import React, { useState } from "react";
import "../styles/MessageResto.css";
import Sidebar from "./Sidebar.js";
import Searchbar from "./Searchbar.jsx";

const MessageResto = () => {
  const [messages, setMessages] = useState([
    { type: "client", content: "Bonjour, je voudrais réserver une table pour ce soir.", sender: "Client A" },
    { type: "admin", content: "Nouvelle notification : Votre abonement va bientot s'espirer.", sender: "Admin" },
    { type: "commande", content: "Votre commande de pizza est en cours de préparation.", sender: "Cuisine" }
  ]);

  return (
    <div className="MessageResto">
      <Sidebar />
      <Searchbar />
      <div className="Messages">
        <h2 style={{ textAlign:'center' }}>Messages du Restaurant</h2>
        {messages.map((message, index) => (
          <div key={index} className={`Messag ${message.type}`}>
            <div className="MessageContent">
              <div className="Sender">{message.sender}</div>
              <div className="Content">{message.content}</div>
            </div>
            {message.type !== "admin" && <button className="ReplyButton">Répondre au message</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageResto;
