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
    aliases: ['image-of-the-day', 'imageoftheday'],
    name: 'iotd',
    category: '😂 Fun',
    description: 'Image of the day, taken from NASA',
    example: 'iotd',
    usage: 'iotd'
}