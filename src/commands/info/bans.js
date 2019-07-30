exports.run = async(bot, msg, args) => {
    const bans = await msg.guild.fetchBans();
    await msg.channel.send(`This server has ${bans.size ? bans.size : '0'} bans.`);
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
