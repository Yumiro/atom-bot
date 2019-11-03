const {
    MessageEmbed
} = require('discord.js');
const Parser = require('rss-parser');
const parser = new Parser();

exports.run = async (bot, msg, args) => {
    const feed = await parser.parseURL('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss');
    const item = feed.items[0];

    const embed = new MessageEmbed()
        .setTitle(item.title)
        .setURL(item.link)
        .setImage(item.enclosure.url)
        .setDescription(item.content)
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