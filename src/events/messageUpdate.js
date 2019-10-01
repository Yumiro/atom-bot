module.exports = (bot, oldmsg, newmsg) => {

    const args = oldmsg.content.slice(bot.config.prefix.length).split(' ') || newmsg.content.slice(bot.config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (oldmsg.author.bot || newmsg.author.bot || oldmsg.embeds.length > 0 || newmsg.embeds.length > 0) {
        return;
    } else {
        bot.guilds.find(f => f.name === 'atom/dev').channels.find(f => f.id === '613783535630680076').send({
            embed: {
                color: 'TRANSPARENT',
                title: 'Message Edited',
                fields: [{
                    name: `User`,
                    value: `${newmsg.author.tag} (${newmsg.author.id})`
                }, {
                    name: `Old Message`,
                    value: `${oldmsg.cleanContent}`
                }, {
                    name: `New Message`,
                    value: `${newmsg.cleanContent}`
                }]
            }
        });
    }
}