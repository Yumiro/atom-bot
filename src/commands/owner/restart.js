exports.run = async (bot, msg, args) => {
    process.exit();
    msg.channel.send(`howdy i'm back`).then(m => m.delete(2000));
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