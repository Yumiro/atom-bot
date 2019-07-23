const { MessageEmbed} = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async(bot, msg, args) => {
    const duration = moment.duration(bot.uptime).format(' D [days], H [hours], m [minutes], s [seconds]');

    var status = new MessageEmbed()
        .setColor(0x36393f)
        status.addField(`Memory Usage`, `:floppy_disk: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        status.addField(`Uptime`, `:clock1130: ${duration}`, true)
        status.addField(`Commands`, `:keyboard: ${bot.commands.size} commands`, true)
        status.addField(`Servers`, `:family: ${bot.guilds.size} servers`, true)
        status.addField(`Channels`, `:speaking_head: ${bot.channels.size} channels`, true)
        status.addField(`Users`, `:man: ${bot.users.size - 1} users`, true)
        msg.channel.send(status);
};

exports.conf = {
    dev: false
}

exports.help = {
    name: 'status',
    category: '❔ Info',
    description: 'Checks the bot\'s status.',
    usage: 'status'
}