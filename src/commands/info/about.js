const { MessageEmbed} = require('discord.js');

exports.run = async(bot, msg, args) => {

    var about = new MessageEmbed()
        .setAuthor(`About Atom Dev`, msg.guild.iconURL(), `https://discordapp.com/invite/eprUzer`)
        .setColor('TRANSPARENT')
        .addField(`Changelog`, `- Fixed a bunch of commands\n - Made many commands look better`)
        .addField(`Library`, `Discord.js`)
        .addField(`People`, `Main Developer - flag#2139\nHelper - Olykir#3966\nCool Boy - Zanxii#0056`)
        .setFooter(`${bot.version}`, `https://cdn.discordapp.com/attachments/502648889728434176/608398619191803936/space.gif`)
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
