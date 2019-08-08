const { MessageEmbed } = require('discord.js');

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
            .addField('Addrole', 'Adds a role to a user in the guild.', false)
            .addField('Usage', 'addrole [@user] [role]', true)
            .addField('Example', 'addrole @flag#0001 automaton', true)
            .setColor(0x36393f)
            .setFooter(msg.guild.name)
        msg.channel.send({ embed });
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
}};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['arole', 'role', 'giverole'],
    name: 'addrole',
    category: '🔨 Moderation',
    description: 'Adds a role to user in the guild.',
    usage: 'addrole [@user] [role]'
}
