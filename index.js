const discord = require("discord.js")
const client = new discord.Client()
const config = require("./config.json")


client.on("ready", async => {
  require("./events/ready.js")(client)
})

client.login(config.token).catch(() => {
  console.log("The Token is Invalid")
})