const { MessageEmbed } = require('discord.js'); 

exports.run = async(bot, msg, args) => {
    const roles = msg.guild.roles.map(f => f.id).slice(1).sort();
    const embed = new MessageEmbed()
        .setAuthor(msg.guild.name + "'s roles", '', `https://powercord.dev`)
        .setColor('TRANSPARENT')
        .setDescription(`**<@&${roles.join('> <@&')}>**`)
        .setFooter(msg.guild.roles.size + " roles")
    msg.channel.send(embed);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['roles', 'listroles'],
    name: 'roles',
    category: '❔ Info',
    description: 'Lists all of the server\'s roles.',
    usage: 'roles'
}
