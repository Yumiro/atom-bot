const { MessageEmbed} = require('discord.js');

exports.run = async(bot, msg, args) => {

    var about = new MessageEmbed()
        .setAuthor(`About Atom`, msg.guild.iconURL(), `https://discordapp.com/invite/eprUzer`)
        .setColor('TRANSPARENT')
        .addField(`Changelog`, `- Added \`role\` \n - Updated \`ping\` \n - Various bug fixes`)
        .addField(`Library`, `Discord.js`)
        .addField(`People`, `Main Developer - flag#4381\nHelper - Olykir#3966\nCool Boy - Zanxii#0056`)
        .setFooter(`${bot.version}`, msg.author.displayAvatarURL())
        msg.channel.send(about);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['bot', 'changelog'],
    name: 'about',
    category: '❔ Info',
    description: 'Sends information about the bot.',
    usage: 'about'
}
