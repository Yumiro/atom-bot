exports.run = async(bot, msg, args) => {
    var ping_msg = await msg.channel.send('Pinging...');
        ping_msg.edit(`Pong! ${Math.round((ping_msg.createdTimestamp - msg.createdTimestamp)/* - bot.ws.ping */)}ms`);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['pingpong', 'pong'],
    name: 'ping',
    category: '❔ Info',
    description: 'Checks the bot\'s ping.',
    usage: 'ping'
}
