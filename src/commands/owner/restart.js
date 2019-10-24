exports.run = async (bot, msg, args) => {
    msg.channel.send(`ok`).then(m => {
        await process.exit();
        m.delete(1000);
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