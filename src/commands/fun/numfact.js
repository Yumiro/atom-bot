const {
    MessageEmbed
} = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (bot, msg, args) => {
    const { body } = await get(`http://numbersapi.com/${args}/trivia`)

    const embed = new MessageEmbed()
        .setDescription(body)
        .setColor('TRANSPARENT')
    msg.channel.send({
        embed
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['number-fact', 'number-facts', 'numberfact', 'numberfacts', 'num-fact', 'num-facts', 'numfacts'],
    name: 'numfact',
    category: '😂 Fun',
    description: 'Sends a random fact about a specified number',
    example: 'numfact 42',
    usage: 'numfact [number]'
}