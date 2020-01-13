const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    if (!args[0]) {
        const embed = new MessageEmbed()
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
            .setTitle('Help')
        if (bot.config.ownerID.includes(msg.author.id)) {
            embed.addField(`🧪  Development`, `\`${bot.commands.filter(f => f.help.category === '🧪 Development' && f.conf.hidden === false).map(f => f.help.name).join(`\` \``)}\``, true)
        }

        if (msg.member.hasPermission('KICK_MEMBERS') && msg.member.hasPermission('BAN_MEMBERS') && msg.member.hasPermission('MANAGE_MESSAGES')) {
            embed.addField(`🔨  Moderation`, `\`${bot.commands.filter(f => f.help.category === '🔨 Moderation').map(f => f.help.name).join(`\` \``)}\``, true)
        }

        embed.addField(`❔  Information`, `\`${bot.commands.filter(f => f.help.category === '❔ Info').map(f => f.help.name).join(`\` \``)}\``, false)
        embed.addField(`😂  Fun`, `\`${bot.commands.filter(f => f.help.category === '😂 Fun').map(f => f.help.name).join(`\` \``)}\``, true)

        msg.channel.send(embed);
    };

    if (args[0]) {
        let cmd = args[0];
        if (bot.commands.has(cmd)) {
            cmd = bot.commands.get(cmd);
            if (cmd.conf.hidden === true) {
                msg.channel.send(`${bot.emojiList.error} You can't do that.`);
                return;
            };
            if (cmd.conf.dev === true && !bot.config.ownerID.includes(msg.author.id)) {
                msg.channel.send(`${bot.emojiList.error} You can't do that, you're not the developer.`);
                return;
            };
            const embed = new MessageEmbed()
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
                .addField(firstUpper(cmd.help.name), cmd.help.description, false)
                .addField(`Aliases`, `${cmd.help.aliases.sort().join(', ')}`, true)
                .addField(`Usage`, `${cmd.help.usage}`, true)
                .addField(`Group`, `${cmd.help.category}`, true)
            await msg.channel.send(embed);
        } else {
            msg.channel.send(`${bot.emojiList.error} Something went wrong, make sure you type the name of the command correctly.`);
        }
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['?', 'h'],
    name: 'help',
    category: '❔ Info',
    description: 'Sends a list of all commands that you can use',
    usage: 'help (command)'
}