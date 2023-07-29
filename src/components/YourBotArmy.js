import React from "react";
// import { useState } from "react";


function YourBotArmy ({allArmyBots, removeBotFromArmy}) {
   

    return (
        <div className="botarmy" >
            {allArmyBots.map((bots) => {
              return(  
               <div className="allcard" key={bots.id} onClick={() => removeBotFromArmy(bots.id)} > 
                    
                        <img className="imgbot" src= {bots.avatar_url} alt="robot"/>
                        <div className="cardbody">
                            <h3 className="cardtitle">{bots.name}</h3>
                            <p>{bots.bot_class}</p>
                            <p>{bots.catchphrase}</p>

                     
                        </div>   
                    
                </div>

            )})}

        </div>
            
    )
}

export default YourBotArmy