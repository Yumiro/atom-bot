exports.run = async (bot, msg, args) => {
    msg.react('👍').then(() => {
        process.exit();
    });
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