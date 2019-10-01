const {
    MessageEmbed
} = require('discord.js');

exports.run = (bot, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_ROLES')) {
        msg.react(':thumbsdown:');
        msg.channel.send(`You can't do that.`);

    } else {

        const role = msg.guild.roles.find(f => f.name === args.slice(1).join(' '));
        const user = msg.mentions.users.first();
        const member = msg.guild.member(user);

        if (!user || !role) {
            const embed = new MessageEmbed()
                .addField(bot.firstUpper(this.help.name), this.help.description, false)
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
                    member.roles.add(`${role.id}`).then(() => {
                        msg.react('👍');
                        console.log(bot.chalk.green(`[ ROLE ] ${user.tag} was given ${role.name}, by ${msg.author.tag}`));
                    }).catch(err => {
                        console.error(err);
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
    aliases: ['arole', 'role', 'giverole'],
    name: 'addrole',
    example: 'addrole @flag automaton',
    category: '🔨 Moderation',
    description: 'Adds a role to user in the guild.',
    usage: 'addrole [@user] [role]'
}