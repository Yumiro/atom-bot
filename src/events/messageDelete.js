module.exports = (bot, msg) => {

    const args = msg.content.slice(bot.config.prefix.length).split(' ') || msg.content.slice(bot.config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (msg.author.bot) {
        return;
    } else {

    bot.guilds.find(f => f.name === 'atom/dev').channels.find(f => f.id === '613783535630680076').send({ embed: {
        color: 'TRANSPARENT',
        title: 'Message Deleted',
        fields: [{
            name: `User`,
            value: `${msg.author.tag} (${msg.author.id})`
        }, {
            name: `Message`,
            value: `${msg.cleanContent}`
        }]
    }});
}
}
