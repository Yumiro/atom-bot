const { MessageEmbed } = require('discord.js'); 

exports.run = async(bot, msg, args) => {
    var ping = await msg.channel.send('Pinging...').then(m => m.delete(1250));
    var ping_number = ping.createdTimestamp
    var ping_msg = await msg.channel.send('** **').then(m => m.edit({ embed: {
        color: 0x36393f,
        description: `:heartbeat: ${Math.round((bot.ws.ping))}ms\n\n:hourglass: ${Math.round((ping_number - msg.createdTimestamp))}ms`
    }}
    ));
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['p', 'ping-pong', 'pong'],
    name: 'ping',
    category: '❔ Info',
    description: 'Checks the bot\'s ping.',
    usage: 'ping'
}
