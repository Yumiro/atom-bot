const Discord = require('discord.js');
const {
  Client,
  Collection,
  MessageEmbed
} = require('discord.js');
const Enmap = require('enmap');
const bot = new Client({
  disableEveryone: true
});
const chalk = require('chalk');
const {
  readdir
} = require('fs');
const folders = ['fun', 'info', 'moderation', 'dev'];

this.bot = bot;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.config = require('./config');
bot.chalk = chalk;
bot.version = 'v3-stable-copper';
bot.versionIMG = 'https://vignette.wikia.nocookie.net/azure-mines/images/2/20/Blockcopper.png';
bot.emojiList = {
  'bell': '<a:abell:486584452600954890>',
  'check': '<:check:657238794499784735>',
  'error': '<:error:657238794461904916>'
};

global.firstUpper = function firstUpper(string) {
  const first = string.split("")[0].toUpperCase();
  const rest = string.split("").slice(1).join("");
  return first + rest
};

global.extractDate = (dateObj) => {
  let month = dateObj.getMonth()
  let day = dateObj.getDate()
  let year = dateObj.getFullYear()
  return {
    month: month + 1,
    day: day,
    year: year
  }
};

global.isEmmaCute = 'yes, very';

readdir("./src/events/", (err, files) => {
  if (err) {
    console.error(err);
  };

  files.forEach(f => {
    const event = require(`./src/events/${f}`);
    console.log(chalk.blue(`Loading ${f} (event)`));
    let event_name = f.split(".")[0];
    bot.on(event_name, event.bind(null, bot));
  });
});

folders.forEach(folders => {
  readdir(`./src/commands/${folders}`, (err, files) => {
    if (err) {
      console.error(err);
    };

    files.forEach(f => {
      let cmds = require(`./src/commands/${folders}/${f}`);
      console.log(chalk.blue(`Loading ${f} (command)`));
      bot.commands.set(cmds.help.name, cmds);
      cmds.help.aliases.forEach(alias => {
        bot.aliases.set(alias, cmds.help.name);
      });
    });
  });
});

bot.login(bot.config.token);