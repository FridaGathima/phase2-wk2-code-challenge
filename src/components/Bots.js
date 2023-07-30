import React from "react";
import { useState, useEffect } from "react"
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import Header from "./Header";

function Bots () {

    const [allBots, setAllBots] = useState([])
    const [allArmyBots, setAllArmyBots] = useState([])

    useEffect(() => {
        fetch ("http://localhost:3000/bots")
        .then (res => res.json())
        .then (data => setAllBots(data))
    }, [])

    function addBotToArmy(botid) {
        const bot = allBots.find( (bot) => bot.id === botid)
        const isBotAlreadyAdded = isBotAddedInArmy(bot)
            if (isBotAlreadyAdded) {
                console.log ("isBotAlreadyAdded")
            }else {
                setAllArmyBots([...allArmyBots, bot])
            }
    }

    function isBotAddedInArmy(bot) {
        return allArmyBots.includes(bot)
    }

    function removeBotFromArmy (id) {
        const newArmy = allArmyBots.filter((bot) => bot.id !== id)
        setAllArmyBots(newArmy)
    }

    function removeBotFromCollection (id) {
        const newArmy = allBots.filter((bot) => bot.id !== id)
        setAllBots(newArmy)
    }

    function deleteBotFromServer(id) {
        fetch (`http://localhost:3000/bots/${id}`, {
            method: "DELETE",
            headers: {
             "Content-type": "application/json",
    }})
        .then ((res => {
            if (res.ok) {
                removeBotFromArmy (id)
                removeBotFromCollection (id)
            }
        }))
    }

        function deleteBot (id) {
            deleteBotFromServer (id)
        }

    return(
        <>
            <Header />
            <YourBotArmy allArmyBots = {allArmyBots} removeBotFromArmy = {removeBotFromArmy} />
            <BotCollection allBots = {allBots} addBotToArmy = {addBotToArmy} deleteBot = {deleteBot} />
        </>
    )

}

export default Bots