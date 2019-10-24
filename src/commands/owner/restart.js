exports.run = async (bot, msg, args) => {
    msg.channel.send(`howdy i'm back`).then(m => m.delete(2000));
    await process.exit();
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