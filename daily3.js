/*
  This bot will make a bot user give daily credits to a user
*/

const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.json');

const token = config.Token3;

function doexit() {
  process.exit()
};

client.on('ready', () => {
  console.log('TatsuBot 3 has started.');
  const channel = client.channels.get(config.ChannelID);
    channel.send("t!dailies <@" + config.OwnerID + ">");
	channel.send("t!rep <@" + config.OwnerID + ">");
	setTimeout(doexit, 3000);
});

client.login(token);