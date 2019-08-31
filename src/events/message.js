module.exports = (bot, msg) => {
    if (msg.channel.type === 'dm') return;
    if (msg.content.indexOf(bot.config.prefix) !== 0) return;

    const args = msg.content.slice(bot.config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    let cmd;
    
    if (bot.commands.has(command)) {
        cmd = bot.commands.get(command);
    } else if (bot.aliases.has(command)) {
        cmd = bot.commands.get(bot.aliases.get(command));
    }

    if (!cmd) return;

    cmd.run(bot, msg, args)
}
