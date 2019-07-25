module.exports = (bot, msg) => {
    if (msg.author.bot) return;
    if (msg.content.indexOf(bot.config.prefix) !== 0) return;

    const args = msg.content.split(' ').slice(1)
    const command = msg.content.split(' ')[0].slice(bot.config.prefix.length).toLowerCase();
    const cmd = bot.commands.get(cmd.help.aliases[0], command);

    if (!cmd) return;

    cmd.run(bot, msg, args)
}
