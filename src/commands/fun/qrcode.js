const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    msg.channel.send(
        new MessageEmbed()
        .setColor('TRANSPARENT')
        .setImage(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(args)}`)
    );
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['qr'],
    name: 'qrcode',
    category: '😂 Fun',
    description: 'Generates a QR Code.',
    usage: 'qrcode [text]'
}