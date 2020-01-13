exports.run = async (bot, msg, args) => {
    process.exit();
};

exports.conf = {
    dev: true,
    hidden: false
}

exports.help = {
    aliases: ['r', 'reboot'],
    name: 'restart',
    category: '🧪 Development',
    description: 'Restarts the bot',
    usage: 'restart'
}