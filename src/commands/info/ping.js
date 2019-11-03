const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const startTime = Date.now();
    msg.channel.send('Pinging...').then(m => {
        const restLatency = Date.now() - startTime;
        m.edit('🏓 Pong!', {
            embed: {
                color: 'TRANSPARENT',
                description: `:heartbeat: ${Math.floor(restLatency)}ms\n\n:hourglass: ${Math.floor(bot.ws.ping)}ms`,
                footer: {
                    name: msg.guild.name,
                    icon_url: ''
                }
            }
        });
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['p', 'ping-pong', 'pong'],
    name: 'ping',
    category: '❔ Info',
    description: 'Checks the bot\'s ping :watch:',
    usage: 'ping'
}