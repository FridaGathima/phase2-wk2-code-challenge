


function BotCollection ({allBots, addBotToArmy, deleteBot}) {
    
    
    return(
        <div className="botscontainer">
            {allBots.map((bots) => {
              return(  
               <div className="allcard" key={bots.id}>
                <button onClick={() => deleteBot(bots.id)} >X</button>
                <div onClick={() => addBotToArmy (bots.id) } > 
                    
                    <img className="imgbot" src= {bots.avatar_url} alt="robot"/>
                    <div className="cardbody">
                        <h3 className="cardtitle">{bots.name}</h3>
                        <p>{bots.bot_class}</p>
                        <p>{bots.catchphrase}</p>

                 
                    </div>   
                
                 </div>
               </div>

            )})}

        </div>
     
    )
}

export default BotCollection