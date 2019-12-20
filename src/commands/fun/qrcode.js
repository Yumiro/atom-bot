const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {

    if (args) {
        msg.channel.send(
            new MessageEmbed()
            .setColor('TRANSPARENT')
            .setImage(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(args)}`)
        );

    }

    if (!args) {

        const embed = new MessageEmbed()
            .addField(firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
        msg.channel.send({
            embed
        });

    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['qr'],
    name: 'qrcode',
    category: '😂 Fun',
    description: 'Generates a QR Code',
    example: 'qrcode xQc',
    usage: 'qrcode [text]'
}