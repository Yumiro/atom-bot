const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {

    var about = new MessageEmbed()
        .setAuthor(`About Atom`, msg.guild.iconURL(), `https://discordapp.com/invite/eprUzer`)
        .setColor('TRANSPARENT')
        .addField(`Changelog`, `- Instead of reacting to the message, send text and delete after 1 second, success (flag)\n- Instead of reacting to the message, send text and delete after 3 seconds, error (flag)\n-Update bot version to \`2.0.0-stable-bronze\` (flag)`)
        .addField(`Library`, `Discord.js`)
        .addField(`People`, `Main Developer - ${bot.users.get('458659194707640321').tag}\nHelper - ${bot.users.get('621154191192096778').tag}\nCool Boy - ${bot.users.get('593510080528515072').tag}`)
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