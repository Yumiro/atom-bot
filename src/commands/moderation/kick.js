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
    const reason = `${msg.content.split(' ').slice(2).join(' ') || 'kick command issued'}`;
    const auditlog_reason = `[${msg.author.tag}] ${msg.content.split(' ').slice(2).join(' ') || 'kick command issued'}`;

    if (user) {
        if (member) {
            if (msg.member.hasPermission('KICK_MEMBERS')) {
                if (!member.hasPermission('KICK_MEMBERS')) {
                    member.kick({
                        reason: auditlog_reason,
                    }).then(() => {
                        const embed = new MessageEmbed()
                            .setColor('TRANSPARENT')
                            .setFooter(msg.guild.name)
                            .setTitle(`Kick`)
                            .addField(`User`, `${user.tag} (${user.id})`, false)
                            .addField(`Reason`, `${reason}`, false)
                        guild.channels.find(f => f.id === '613783841869529094').send(embed);
                        msg.channel.send(`:wave:`);
                    }).catch(err => {
                        console.error(err);
                    });
                } else {
                    msg.channel.send(`${bot.emojiList.error} It looks like this user has the \`KICK_MEMBERS\` permission, try again later.`);
                    return;
                };
            } else {
                msg.channel.send(`${bot.emojiList.error} You can't do that, you're missing the \`KICK_MEMBERS\` permission.`);
                return;
            };
        };
    } else {
        const embedv2 = new MessageEmbed()
            .addField(firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
        msg.channel.send(embedv2);
        return;
    };
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['k'],
    name: 'kick',
    example: 'kick @flag stop being rude',
    category: '🔨 Moderation',
    description: 'Kicks the specified user from the guild',
    usage: 'kick [@user] [reason]'
}