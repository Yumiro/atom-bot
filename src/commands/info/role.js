const {
    MessageEmbed
} = require('discord.js');
const moment = require('moment');

exports.run = async (bot, msg, args) => {
    const argsv2 = msg.content.split(' ').splice(1).join(' ');

    if (argsv2) {
        const role = msg.guild.roles.find(f => f.name === argsv2);
        const embed = new MessageEmbed()
            .setThumbnail(msg.guild.iconURL)
            .setFooter(msg.guild.name)
            .setColor('TRANSPARENT')
            .addField('User Count', `${role.members.size} ${role.members.size < 2 ? 'user' : 'users'}`, true)
            .addField('Permissions', `${role.permissions.bitfield} (bitfield)`, true)
            .addField('Created At', `${moment.utc(role.createdAt).format('ddd, MMM Do YYYY')}`, true)
            .addField('Mentionable', `${role.mentionable ? 'Yes' : 'No'}`, true)
            .addField('Hoisted', `${role.hoist ? 'Yes' : 'No'}`, true)
            .addField('Color', `${role.hexColor || 'TRANSPARENT'}`, true)
            .addField('Position', `${role.position}`, true)
            .addField('Mention', `<\\@\\&${role.id}\>`, true)
            .addField('ID', `${role.id}`, true)

        if (role.permissions.serialize().ADMINISTRATOR) {
            embed.setFooter('Members with this role have every permission and can bypass any channel specific permissions')
        };

        msg.channel.send({
            embed
        });
    } else {
        const emb = new MessageEmbed()
            .addField(firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)

        msg.channel.send(emb);
        return;
    };
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['roleinfo'],
    name: 'role',
    example: 'role green',
    category: '❔ Info',
    description: 'Displays information about a specified role',
    usage: 'role [rolename]'
}