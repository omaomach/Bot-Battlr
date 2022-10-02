import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [botsPage, setBotsPage] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
  const [monitorCollection, setMonitorCollection] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((bots) => {
      setBotsPage(bots)
    })
  }, [monitorCollection])

  function addToBotArmy(bot) {
    const updatedArmy = botsArmy.find((robot) => robot.id === bot.id)
    if (!updatedArmy) setBotsArmy([...botsArmy, bot])

  }

  function removeBotFromArmy(bot) {
    const updatedArmy = botsArmy.find((robot) => robot.id === bot.id)
    if (updatedArmy) {
      setBotsArmy(
        botsArmy.filter((robots) => robots.id !== bot.id)
      )
    }
  }

  function deleteBotFromCollection(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
    setMonitorCollection(true)
}

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} onRemoveBotFromArmy={removeBotFromArmy}/>
      <BotCollection botsPage={botsPage} onAddBotArmy={addToBotArmy} onDeleteBotFromCollection = {deleteBotFromCollection}/>
    </div>
  )
}

export default BotsPage
