const {
    MessageEmbed
} = require('discord.js');
const { duration } = require('moment');
require('moment-duration-format');

exports.run = async (bot, msg, args) => {
    var status = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setFooter(msg.guild.name, bot.versionIMG)
        .setTitle(`Bot Status`)
        .addField(`Memory Usage`, (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB', true)
        .addField(`Uptime`, duration(bot.uptime).format('D[d], H[h], m[m], s[s]'), true)
        .addField(`Commands`, bot.commands.size, true)
        .addField(`Servers`, bot.guilds.size, true)
        .addField(`Channels`, bot.channels.size, true)
        .addField(`Users`, bot.users.size - 1, true)
        .addField(`Ping`, Math.round(bot.ws.ping) + 'ms', true)
        .addField(`Version`, bot.version, true)
        .addField(`Is Emma Cute️™️`, isEmmaCute, true)
    msg.channel.send(status);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['stats'],
    name: 'status',
    category: '❔ Info',
    description: 'Checks the bot\'s status',
    usage: 'status'
}