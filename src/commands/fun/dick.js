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
    aliases: ['dick-size', 'dicksize', 'pp'],
    name: 'dick',
    category: '😂 Fun',
    description: 'Checks your dick size',
    example: 'dick',
    usage: 'dick'
}