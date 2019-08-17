const { MessageEmbed } = require('discord.js');
const moment = require('moment');

exports.run = async(bot, msg, args) => {
    const argsv2 = msg.content.split(' ').splice(1).join(' ')

    if (argsv2) {
        const role = msg.guild.roles.find(f => f.name === argsv2);
        const embed = new MessageEmbed()
            .setThumbnail(msg.guild.iconURL)
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setColor('TRANSPARENT')
            .addField('User Count', `${role.members.size} ${role.members.size < 2 ? 'user' : 'users'}`, true)
            .addField('Permissions', `${role.permissions.bitfield} (bitfield)`, true)
            .addField('Created At', `${moment.utc(role.createdAt).format('ddd, MMM Do YYYY')}`, true)
            .addField('Mentionable', `${role.mentionable ? 'Yes' : 'No'}`, true)
            .addField('Hoisted', `${role.hoist ? 'Yes' : 'No'}`, true)
            .addField('Color', `${role.hexColor || 0x4f545c}`, true)
            .addField('Position', `${role.position}`, true)
            .addField('Mention', `<\\@\\&${role.id}\>`, true)
            .addField('ID', `${role.id}`, true)
            .setFooter(`${role.name} (${role.id})`)
        
        msg.channel.send({ embed });
    } else {
        msg.react('👎');
        return;
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['roleinfo'],
    name: 'role',
    category: '❔ Info',
    description: 'Displays information about the specified role.',
    usage: 'role [rolename]'
}
