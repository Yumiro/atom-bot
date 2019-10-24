exports.run = async (bot, msg, args) => {
    msg.channel.send(`ok`).then(async () => {
        await process.exit();
    }).then(m => m.delete(3000));
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