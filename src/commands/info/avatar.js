const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const av = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setImage(msg.author.displayAvatarURL())
    msg.channel.send(av);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['av'],
    name: 'avatar',
    category: '❔ Info',
    description: 'Sends your avatar image',
    usage: 'avatar'
}