var Discord = require("discord.js");
var bot = new Discord.Client();

var token = process.env.Discord_token ||  process.argv[2];
bot.login(token);
//les message 

bot.on('message', mes => {
	var resu = mes.content.toLowerCase();
	if(resu=== "salut"||"hello"||"hi"){
	mes.reply("salut a toi!");
	}
	if (resu.startsWith("id")) {
		if(resu==="id")
			mes.channel.send(mes.mentions.users.id);
		else(mes.mentions.users.first())
		mes.channel.send(mes.mentions.users.first().id);
	};
	if (resu === "avatar") { mes.reply(mes.author.avatar); };
});
