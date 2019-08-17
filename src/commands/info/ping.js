const { MessageEmbed } = require('discord.js'); 

exports.run = async(bot, msg, args) => {
    const startTime = Date.now();
    msg.channel.send('Pinging...').then(m => {
      const restLatency = Date.now() - startTime;
      m.edit('🏓 Pong!', { embed: {
          color: 'TRANSPARENT',
          description: `:heartbeat: ${restLatency}ms\n\n:hourglass: ${bot.ws.ping}ms`
        }});
    });
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
