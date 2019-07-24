const { MessageEmbed } = require('discord.js');

exports.run = async(bot, msg, args) => {
    const av = new MessageEmbed()
        .setColor(0x36393f)
        .setImage(msg.author.displayAvatarURL())
        .setFooter('ok')
    msg.channel.send(av);
};

exports.conf = {
    dev: false
}

exports.help = {
    name: 'avatar',
    category: '❔ Info',
    description: 'Sends ur avatar image.',
    usage: 'avatar'
}
