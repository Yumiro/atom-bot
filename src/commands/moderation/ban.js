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
        msg.channel.send(`I don't think banning yourself would be a good idea.`);
    };

    if (!reason) {
        msg.channel.send(`Provide a reason.`);
    };

    if (user) {
        if (member) {
            if (reason) {
            if (member.hasPermission('BAN_MEMBERS')) {
                msg.react('👎');
                msg.channel.send(`This user is a mod/admin, I can't do that.`);
            };
            member.ban({days: 0, reason: `Responsible User: ${msg.author.tag} (${reason})`}).then(() => {
            msg.react('👍');
            console.log(bot.chalk.red(`[ PBAN ] ${user.tag} was banned by ${msg.author.tag}, ${reason}`));
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
    name: 'ban',
    category: '🔨 Moderation',
    description: 'Bans a user from the guild.',
    usage: 'ban [@user] [reason]'
}
