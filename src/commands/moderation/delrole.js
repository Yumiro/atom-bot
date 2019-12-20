const {
    MessageEmbed
} = require('discord.js');

exports.run = (bot, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_ROLES')) {
        msg.channel.send(`you can't do that`);

    } else {

        const role = msg.guild.roles.find(f => f.name === args.slice(1).join(' '));
        const user = msg.mentions.users.first();
        const member = msg.guild.member(user);

        if (!user || !role) {
            const embed = new MessageEmbed()
                .addField(firstUpper(this.help.name), this.help.description, false)
                .addField('Usage', this.help.usage, true)
                .addField('Example', this.help.example, true)
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
            msg.channel.send({
                embed
            });
        };

        if (user) {
            if (member) {
                if (role) {
                    member.roles.remove(`${role.id}`).then(() => {
                        msg.channel.send(`${bot.emojiList.check} ${user.tag} was taken from **${role.name}** by ${msg.author.tag}.`);
                        console.log(bot.chalk.red(`[ ROLE ] ${user.tag} was taken from ${role.name} by ${msg.author.tag}`));
                    }).catch(err => {
                        console.error(err);
                        msg.channel.send(`${bot.emojiList.error} Something went wrong, if this error continues to persist please contact the developer: **${bot.users.get('458659194707640321').tag}**.`);
                    });
                }
            }
        }
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['rrole', 'removerole', 'takerole'],
    name: 'delrole',
    example: 'delrole @flag big dummy',
    category: '🔨 Moderation',
    description: 'Removes a specified role from a certain user in the guild',
    usage: 'delrole [@user] [role]'
}