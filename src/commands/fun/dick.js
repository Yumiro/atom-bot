const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    const size = msg.author.id.slice(-3) % 20 + 1;

    const embed = new MessageEmbed()
        .setTitle(size + 'cm')
        .setDescription(`8${'='.repeat(size)}D`)
        .setColor('TRANSPARENT')

    msg.channel.send({
        embed
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['dick-size', 'dicksize', 'pp', 'big-pp', 'bigpp', 'cock', 'cocksize', 'cock-size'],
    name: 'dick',
    category: '😂 Fun',
    description: 'Checks your dick size',
    example: 'dick',
    usage: 'dick'
}