const { MessageEmbed } = require('discord.js');

exports.run = (bot, msg, args) => {
    if (!msg.member.hasPermission('KICK_MEMBERS')) {
        msg.react(':thumbsdown:');
        msg.channel.send(`You can't do that.`);

    } else {

    const reason = args.slice(1).join(' ');
    const user = msg.mentions.users.first();
    const member = msg.guild.member(user);
    
    if (user === msg.author) {
        msg.react('👎');
    };

    if (!user || !reason) {
        const embed = new MessageEmbed()
            .addField('Ban', 'Bans a user from the guild.', false)
            .addField('Usage', 'ban [@user] [reason]', true)
            .addField('Example', 'ban @flag#0001 stop spamming', true)
            .setColor(0x36393f)
            .setFooter(msg.guild.name)
        msg.channel.send({ embed });
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
            console.log(bot.chalk.red(`[ GTFO ] ${user.tag} was banned by ${msg.author.tag}, ${reason}`));
            }).catch(err => {
                console.error(err);
            });
        }
        }
    }
}};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['b', 'gtfo'],
    name: 'ban',
    category: '🔨 Moderation',
    description: 'Bans a user from the guild.',
    usage: 'ban [@user] [reason]'
}
