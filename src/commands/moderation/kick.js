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
            .addField('Kick', 'Kicks a user from the guild.', false)
            .addField('Usage', 'kick [@user] [reason]', true)
            .addField('Example', 'kick @flag#0001 stop pinging', true)
            .setColor(0x36393f)
            .setFooter(msg.guild.name)
        msg.channel.send({ embed });
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
    }
    };
}};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['k'],
    name: 'kick',
    category: '🔨 Moderation',
    description: 'Kicks a user from the guild.',
    usage: 'kick [@user] [reason]'
}
