const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const roles = msg.guild.roles.map(f => f.id).slice(1).sort();
    const embed = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setDescription(`**<@&${roles.join('> <@&')}>**`)
        .setFooter(`${msg.guild.roles.size} roles in ${msg.guild.name}`)
    msg.channel.send(embed);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['listroles'],
    name: 'roles',
    category: '❔ Info',
    description: 'Lists all of the server\'s roles',
    usage: 'roles'
}