const { MessageEmbed} = require('discord.js');

exports.run = async(bot, msg, args) => {

    var about = new MessageEmbed()
        .setAuthor(`About Atom`, msg.guild.iconURL(), `https://discordapp.com/invite/eprUzer`)
        .setColor(0x36393f)
        .addField(`Changelog`, `- Added \`addrole\` \`clear\` \`delrole\`\n - Updated \`ban\` \`kick\``)
        .addField(`Library`, `Made in Discord.js and with ❤️`)
        .addField(`People`, `Main Developer - flag#0004\nHelper - Olykir#0911\nCool Boy - Zanxii#0056`)
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
