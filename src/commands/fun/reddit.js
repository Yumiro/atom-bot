const {
    MessageEmbed
} = require('discord.js');
const {
    req
} = require('node-superfetch');

exports.run = async (bot, msg, args) => {
    let redditUrl = `https://www.reddit.com/r/${args[0]}/top.json?t=${args[1]}`;

    let thumbnails;
    let messages;
    let titles;
    await req.get(redditUrl).then(body => {
        thumbnails = body.data.children[0].data.thumbnail;
        titles = body.data.children[0].data.title;
        message = body.data.children[0].data.permalink;
    });

    const embed = new MessageEmbed()
        .setTitle(args[0])
        .setURL(`https://reddit.com${message}`)
        .setDescription(titles.replace('amp', ''))
        .setThumbnail(thumbnails)
    msg.channel.send({
        embed
    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['qr'],
    name: 'qrcode',
    category: '😂 Fun',
    description: 'Generates a QR Code.',
    example: 'qrcode xQc',
    usage: 'qrcode [text]'
}