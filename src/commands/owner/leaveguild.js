exports.run = async(bot, msg, args) => {
    msg.delete();
    const guild = await bot.guilds.get(`${args}`);
    if (guild.systemChannel) {
        guild.systemChannel.send(`This guild has been identified as a bot/spam guild by one of my developers, and as a result I'll have to leave.\nIf you wish to talk to my main developer, contact \`flag#0004\`.`);
        guild.leave();
        console.log(bot.chalk.yellow(`[ DEBG ] Bot left "${guild.name}". Responsible User: "${msg.author.tag}"`));
    } else {
        msg.channel.send(`I wasn't able to find the specified guild's system channel to send the warning message.`);
        guild.leave();
        console.log(bot.chalk.yellow(`[ DEBG ] Bot left "${guild.name}". Responsible User: "${msg.author.tag}"`));
    }
}

exports.conf = {
    dev: true,
    hidden: true
}

exports.help = {
    aliases: ['forceleave'],
    name: 'leaveguild',
    category: '🚫 Owner',
    description: 'Leaves the specified guild.',
    usage: 'leaveguild [guildid]'
}
