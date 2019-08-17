const Discord = require('discord.js');
const { Client, Collection, MessageEmbed } = require('discord.js'); 
const Enmap = require('enmap');
const bot = new Client({ disableEveryone: true });
const config = require("./config.json");
const chalk = require('chalk');
const { readdir } = require('fs');
const folders = ['fun', 'info', 'moderation', 'owner',];

bot.commands = new Collection();
bot.aliases = new Collection();
bot.config = config;
bot.chalk = chalk;
bot.version = '1.4.5-stable-azer';

readdir("./src/events/", (err, files) => {
    if (err) {
       console.error(err);
    }

    files.forEach(f => {
      const event = require(`./src/events/${f}`);
      console.log(chalk.blue(`[ LOAD ] Loading ${f} (event)`))
      let event_name = f.split(".")[0];
      bot.on(event_name, event.bind(null, bot));
    });
});

folders.forEach(folders => {
    readdir(`./src/commands/${folders}`, (err, files) => {
      if (err) {
        console.error(err);
      }

      files.forEach(f => {
        let cmds = require(`./src/commands/${folders}/${f}`);
        console.log(chalk.blue(`[ LOAD ] Loading ${f} (command)`));
        bot.commands.set(cmds.help.name, cmds);
        cmds.help.aliases.forEach(alias => { 
        bot.aliases.set(alias, cmds.help.name)
        })
      })
    })
});

/* readdir("./commands/", (err, files) => {
    if (err) console.log.error(err);

    files.forEach(f => {
      let props = require(`./commands/${f}`);
      console.log(chalk.blue(`[ LOAD ] Loading ${f} command`));
      bot.commands.set(props.help.aliases, props.help.name, props);
    });
}); */

bot.login(config.token);
