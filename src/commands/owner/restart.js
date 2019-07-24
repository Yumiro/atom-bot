

exports.run = async(bot, msg, args) => {
    if (!bot.config.ownerID.includes(msg.author.id)) {
        msg.react('👎');
    };

    if (bot.config.ownerID.includes(msg.author.id)) {
        msg.react('👍'); 
        process.exit();
}
}

exports.conf = {
    dev: true
}

exports.help = {
    name: 'restart',
    category: '🚫 Owner',
    description: 'Restarts the bot.',
    usage: 'restart'
}
