exports.run = (bot, msg, args) => {
    if (!msg.member.hasPermission('KICK_MEMBERS')) {
        msg.react(':thumbsdown:');
        msg.channel.send(`You can't do that.`)
    } else {
    const reason = args.slice(1).join(' ');
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    
    if (user === msg.author) {
        msg.react('👎');
        msg.channel.send(`I don't think kicking yourself would be a good idea.`);
    };

    if (!reason) {
        msg.channel.send(`Provide a reason.`);
    };

    if (user) {
        if (member) {
            if (reason) {
            if (member.hasPermission('KICK_MEMBERS')) {
                msg.react('👎');
                msg.channel.send(`This user is a mod/admin, I can't do that.`);
            };
            member.kick(`Responsible User: ${msg.author.tag} (${reason})`).then(() => {
            msg.react('👍');
            console.log(bot.chalk.red(`[ KICK ] ${user.tag} was kicked by ${msg.author.tag}, ${reason}`));
            }).catch(err => {
                console.error(err);
            });
        }
        } else {
            msg.react('👎');
            msg.channel.send(`User not found.`);
        }
    } else {
        msg.react('👎');
        msg.channel.send(`User not found.`);
    };
}};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['k', 'donkeykick'],
    name: 'kick',
    category: '🔨 Moderation',
    description: 'Kicks a user from the guild.',
    usage: 'kick [@user] [reason]'
}
