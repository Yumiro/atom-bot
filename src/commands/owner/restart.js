exports.run = async(bot, msg, args) => {
    if (!bot.config.ownerID.includes(msg.author.id)) {
        msg.react('👎');
    } else {
        msg.react('👍').then(() => { 
            process.exit();
    });
};
};

exports.conf = {
    dev: true,
    hidden: false
}

exports.help = {
    aliases: ['r', 'reboot'],
    name: 'restart',
    category: '🚫 Owner',
    description: 'Restarts the bot.',
    usage: 'restart'
}
