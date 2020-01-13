const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const user = msg.mentions.members.first() || msg.guild.members.find(f => f.user.username.toLowerCase() === args[0]) || msg.member;
    const av = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setImage(user.user.displayAvatarURL())
    msg.channel.send(av);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['av'],
    name: 'avatar',
    category: '❔ Info',
    description: 'Sends a specified user\'s avatar image',
    usage: 'avatar'
}