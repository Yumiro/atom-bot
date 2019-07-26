const Discord = require('discord.js');
const Enmap = require('enmap');
const bot = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");
const chalk = require('chalk');
const { readdir } = require('fs');
const folders = ['info', 'moderation', 'owner'];

bot.commands = new Discord.Collection();
bot.config = config;
bot.chalk = chalk;

function login() {
    bot.login(config.token);
};

readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);

    files.forEach(f => {
      const event = require(`./src/events/${f}`);
      console.log(chalk.blue(`[ LOAD ] Loading "${f}" event`))
      let event_name = f.split(".")[0];
      bot.on(event_name, event.bind(null, bot));
    });
});

folders.forEach(folders => {
    readdir(`./src/commands/${folders}`, (err, files) => {
      if (err) {
        console.log.error(err);
      }

      files.forEach(f => {
        let cmds = require(`./src/commands/${folders}/${f}`);
        console.log(chalk.blue(`[ LOAD ] Loading "${f}" command`));
        bot.commands.set(f, cmds.help.name);
      })
    })
});

/* readdir("./commands/", (err, files) => {
    if (err) console.log.error(err);

    files.forEach(f => {
      let props = require(`./commands/${f}`);
      console.log(chalk.blue(`[ LOAD ] Loading "${f}" command`));
      bot.commands.set(props.help.aliases, props.help.name, props);
    });
}); */

login();
