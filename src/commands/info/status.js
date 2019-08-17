const { MessageEmbed} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(bot, msg, args) => {
    const duration = moment.duration(bot.uptime).format('D[d], H[h], m[m], s[s]');

    var status = new MessageEmbed()
        .setColor('TRANSPARENT')
        .addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true)
        .addField(`Uptime`, `${duration}`, true)
        .addField(`Commands`, `${bot.commands.size} commands`, true)
        .addField(`Servers`, `${bot.guilds.size} servers`, true)
        .addField(`Channels`, `${bot.channels.size} channels`, true)
        .addField(`Users`, `${bot.users.size - 1} users`, true)
        msg.channel.send(status);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['stats'],
    name: 'status',
    category: '❔ Info',
    description: 'Checks the bot\'s status.',
    usage: 'status'
}
