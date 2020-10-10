const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")
client.on("ready", () => {
  console.log("Logged in as");
  console.log(client.user.username);
  console.log(client.user.id);
  console.log("------");
  console.log("online");
  client.user.setStatus("online");
  client.user.setActivity("Catch With 1 Server!");
});
client.on('message', message => {
if(message.content === "d!help") {
let embed = new MessageEmbed()
.setTitle("**Doggy Help!**")
.setDescription("**Use d!commands for commands!**")
.setColor("#FF0000")
.setFooter('Made By ArchDev#8837')
message.channel.send(embed)
}
});
client.on('message', message => {
if(message.content === "d!commands") {
let embed = new MessageEmbed()
.setTitle("Doggy's Command List")
.setDescription("`**d!kick**\n**d!ban**\n**d!ping**\n**d!avatar**\n**d!info**\n**d!fruit**\n**d!like**\n**d!dislike**\n**d!cool**`")
.setColor("#FF0000")
.setFooter('Made By ArchDev#8837')
message.channel.send(embed)
}
});
client.on("message", msg => {
  if (msg.content === "d!ping") {
    msg.reply("Pong!");
  }
});
client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    channel => channel.name === "👋welcomes"
  );
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.on("message", message => {
  if (!message.guild) return;

  if (message.content.startsWith("d!kick")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick("They were bad!")
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to kick the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;

  if (message.content.startsWith("d!ban")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: "They were bad!"
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
client.on("message", message => {
  if (message.content === "d!avatar") {
    message.reply(message.author.displayAvatarURL());
  }
});
client.on("message", msg => {
  if (msg.content === "d!servercount") {
    msg.reply("I am currently in 1 server!");
  }
});
client.on("message", msg => {
  if (msg.content === "d!cool") {
    msg.react("😎");
  }
});
client.on("message", msg => {
  if (msg.content === "d!fruit") {
  msg.react('🍎');
	msg.react('🍊');
	msg.react('🍇');
  }
});
client.on("message", msg => {
  if (msg.content === "d!info") {
    msg.reply("Bots Name:Doggy\n Bot Dev:@Mr.RobloxMan#8837");
  }
});
client.on("message", msg => {
  if (msg.content === "d!like") {
    msg.react("👍");
  }
});
client.on("message", msg => {
  if (msg.content === "d!dislike") {
    msg.react("👎");
  }
});
client.login('token');
