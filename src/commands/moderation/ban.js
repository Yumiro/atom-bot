const {
    MessageEmbed
} = require('discord.js');

exports.run = (bot, msg, args) => {
    const {
        guild
    } = msg.channel;
    const argsv2 = msg.content.split(' ').slice(1);
    const user = msg.mentions.users.first();
    const member = guild.member(user);
    const reason = `${msg.content.split(' ').slice(2).join(' ') || 'ban command issued'}`;
    const auditlog_reason = `[${msg.author.tag}] ${msg.content.split(' ').slice(2).join(' ') || 'ban command issued'}`;
    const embed = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setFooter(msg.guild.name)
        .setTitle(`Ban`)
        .addField(`User`, `${user.tag} (${user.id})`, false)
        .addField(`Reason`, `${reason}`, false)

    if (user) {
        if (member) {
            if (msg.member.hasPermission('BAN_MEMBERS')) {
                if (!member.hasPermission('BAN_MEMBERS')) {
                    member.ban({
                        days: 0,
                        reason: auditlog_reason,
                    }).then(() => {
                        guild.channels.find(f => f.id === '613783841869529094').send({
                            embed
                        });
                    }).catch(err => {
                        console.error(err);
                    });
                } else {
                    msg.react('👎');
                    return;
                };
            } else {
                msg.react('👎');
                return;
            };
        };
    } else {
        const embedv2 = new MessageEmbed()
            .addField(bot.firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
        msg.channel.send({
            embedv2
        });
        return;
    };
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['b', 'gtfo'],
    name: 'ban',
    example: 'ban @flag stop spamming',
    category: '🔨 Moderation',
    description: 'Bans a user from the guild.',
    usage: 'ban [@user] [reason]'
}