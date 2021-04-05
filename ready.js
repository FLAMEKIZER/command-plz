const discord = require("discord.js")
const config = require("../config.json")

module.exports = async (client) => {
  
  console.log(`${client.user.tag} is Online`)
  
  if (!config.message) return console.log("No Message has been Given in Config.")
  
  console.log("Preparing Mass DM.\nThis can take upto 10 Secs.")
 
 let num = 0
 
 let users = client.users
 
 setTimeout(() => {
 
 users.forEach(async u => {
    
    let check = 0
    
    try {
   await u.send(config.message).catch(() => {
      check = 1
    })
    } catch {
      check = 1
    }
    num++
    
    if (check !== 0) {
      console.log(`Couldn't send DM to ${u.tag}`)
    }
    
    else {
      console.log(`Sent DM to ${u.tag}`)
    }
    
    if (num === users.size) {
      
   console.log("Process Completed.\nShutting Down Bot...")
  
  setTimeout(() => {
  
  console.log("Bot has been Shut Down.")
  
   client.destroy()
   
  }, 5000)
   
    }
  
  
 })
 
 }, 10000)
  
}