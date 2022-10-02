import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArmy, onRemoveBotFromArmy }) {

  const army = botsArmy.map((bot) => {
    return <BotCard key={bot} bot={bot} handleBot={onRemoveBotFromArmy}/>
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
