import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botsPage, onAddBotArmy, onDeleteBotFromCollection }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {botsPage.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={onAddBotArmy} handleBotDelete={onDeleteBotFromCollection}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
