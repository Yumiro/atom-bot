exports.run = async(bot, msg, args) => {
    const bans = await msg.guild.fetchBans();
    await msg.channel.send({ embed: {
        color: 'TRANSPARENT',
        description: `:hammer: ${bans.size} bans`
    }});
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['banlist', 'baddies'],
    name: 'bans',
    category: '❔ Info',
    description: 'Lists all bans on the server you run the command.',
    usage: 'bans'
}
