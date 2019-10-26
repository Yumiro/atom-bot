const {
    MessageEmbed
} = require('discord.js');
const req = require('node-superfetch');

exports.run = async (bot, msg, args) => {

    const { body } = await req.get('https://api.github.com/repos/Yumiro/atom69/commits')
    var about = new MessageEmbed()
        .setAuthor(`Changelog`, msg.guild.iconURL(), `https://discordapp.com/invite/eprUzer`)
        .setColor('TRANSPARENT')
        .addField(`Commit \`${body[0].sha.substring(0, 7)}\` (${body[0].commit.author.name})`, `Commit Message \`${body[0].commit.message}\`\nAdditions \`${body[0].stats.additions}\`\nDeletions \`${body[0].stats.deletions}\``)
        .addField(`Commit \`${body[1].sha.substring(0, 7)}\` (${body[1].commit.author.name})`, `Commit Message \`${body[1].commit.message}\`\nAdditions \`${body[1].stats.additions}\`\nDeletions \`${body[1].stats.deletions}\``)
        .addField(`Commit \`${body[2].sha.substring(0, 7)}\` (${body[2].commit.author.name})`, `Commit Message \`${body[2].commit.message}\`\nAdditions \`${body[2].stats.additions}\`\nDeletions \`${body[2].stats.deletions}\``)
        .addField(`Commit \`${body[3].sha.substring(0, 7)}\` (${body[3].commit.author.name})`, `Commit Message \`${body[3].commit.message}\`\nAdditions \`${body[3].stats.additions}\`\nDeletions \`${body[3].stats.deletions}\``)
        .addField(`Commit \`${body[4].sha.substring(0, 7)}\` (${body[4].commit.author.name})`, `Commit Message \`${body[4].commit.message}\`\nAdditions \`${body[4].stats.additions}\`\nDeletions \`${body[4].stats.deletions}\``)
        .addField(`Library`, `Discord.js`)
        .addField(`People`, `Main Developer - ${bot.users.get('458659194707640321').tag}\nDeveloper - ${bot.users.get('621154191192096778').tag}\nCool Boy - ${bot.users.get('593510080528515072').tag}`)
        .setFooter(`${bot.version} • latest 5 commits`, `https://cdn.discordapp.com/attachments/502648889728434176/608398619191803936/space.gif`)
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