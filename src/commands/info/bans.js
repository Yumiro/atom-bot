exports.run = async (bot, msg, args) => {
    const bans = await msg.guild.fetchBans();
    await msg.channel.send({
        embed: {
            color: 'TRANSPARENT',
            description: `🔨 ${bans.size} ${bans.size < 2 ? 'ban' : 'bans'}`,
            footer: {
                text: msg.guild.name,
                iconURL: bot.versionIMG
            }
        }
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['banlist', 'baddies'],
    name: 'bans',
    category: '❔ Info',
    description: 'Lists all bans on the current server',
    usage: 'bans'
}