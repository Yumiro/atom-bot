const {
    MessageEmbed
} = require('discord.js');
const req = require('node-superfetch');

exports.run = async (bot, msg, args) => {

    const { body } = await req.get('https://api.github.com/repos/Yumiro/atom-bot/commits');

    var about = new MessageEmbed()
        .setAuthor(`Changelog`, msg.guild.iconURL(), `https://discord.gg/jUMqBjU`)
        .setColor('TRANSPARENT')
        .addField(`\`${body[0].sha.substring(0, 7)}\` by ${body[0].commit.author.name}`, `[${body[0].commit.message}](https://github.com/Yumiro/atom-bot/commit/${body[0].sha.substring(0, 7)})`)
        .addField(`\`${body[1].sha.substring(0, 7)}\` by ${body[1].commit.author.name}`, `[${body[1].commit.message}](https://github.com/Yumiro/atom-bot/commit/${body[1].sha.substring(0, 7)})`)
        .addField(`\`${body[2].sha.substring(0, 7)}\` by ${body[2].commit.author.name}`, `[${body[2].commit.message}](https://github.com/Yumiro/atom-bot/commit/${body[2].sha.substring(0, 7)})`)
        .addField(`\`${body[3].sha.substring(0, 7)}\` by ${body[3].commit.author.name}`, `[${body[3].commit.message}](https://github.com/Yumiro/atom-bot/commit/${body[3].sha.substring(0, 7)})`)
        .addField(`\`${body[4].sha.substring(0, 7)}\` by ${body[4].commit.author.name}`, `[${body[4].commit.message}](https://github.com/Yumiro/atom-bot/commit/${body[4].sha.substring(0, 7)})`)
        .addField(`Library`, `Discord.js`)
        .addField(`People`, `Head Developer - ${bot.users.get('458659194707640321').tag}\nDeveloper - ${bot.users.get('621154191192096778').tag}\nContributor - ${bot.users.get('593510080528515072').tag}`)
        .setFooter(`${bot.version} • showing latest 5 commits`, bot.versionIMG)
    msg.channel.send(about);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['bot', 'changelog'],
    name: 'about',
    category: '❔ Info',
    description: 'Sends information about the bot',
    usage: 'about'
}