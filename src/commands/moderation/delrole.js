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
                        msg.channel.send('ok, done');
                        console.log(bot.chalk.red(`[ ROLE ] ${user.tag} was taken from ${role.name}, by ${msg.author.tag}`));
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
    aliases: ['rrole', 'removerole', 'takerole'],
    name: 'delrole',
    example: 'delrole @flag big dummy',
    category: '🔨 Moderation',
    description: 'Removes a role from a user in the guild',
    usage: 'delrole [@user] [role]'
}