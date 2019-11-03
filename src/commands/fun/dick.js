const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const size = msg.author.id.slice(-3) % 20 + 1;

    const embed = new MessageEmbed()
        .setDescription(`${size}cm\n8${'='.repeat(size)}D`)
        .setColor('TRANSPARENT')

    msg.channel.send({
        embed
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['iotd'],
    name: 'imageoftheday',
    category: '😂 Fun',
    description: 'Image of the day.',
    example: 'imageoftheday',
    usage: 'imageoftheday'
}