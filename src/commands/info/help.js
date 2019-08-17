const { MessageEmbed } = require('discord.js');

exports.run = async(bot, msg, args) => {

    function firstUpper(string) {
        const first = string.split("")[0].toUpperCase()
        const rest = string.split("").slice(1).join("")
        return first + rest
    }

    if (!args[0]) {
        const embed = new MessageEmbed()
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
            .setTitle(`Help`)
            if (bot.config.ownerID.includes(msg.author.id)) {
                embed.addField(`:no_entry_sign: Owner`, `\`${bot.commands.filter(f => f.help.category === '🚫 Owner' && f.conf.hidden === false).map(f => f.help.name).join(`\` \``)}\``, true)
            }

            if (msg.member.hasPermission('KICK_MEMBERS') && msg.member.hasPermission('BAN_MEMBERS') && msg.member.hasPermission('MANAGE_MESSAGES')) {
                embed.addField(`:hammer: Moderation`, `\`${bot.commands.filter(f => f.help.category === '🔨 Moderation').map(f => f.help.name).join(`\` \``)}\``, true)
            }

                embed.addField(`:grey_question: Information`, `\`${bot.commands.filter(f => f.help.category === '❔ Info').map(f => f.help.name).join(`\` \``)}\``, false)

                embed.addField(`:joy: Fun`, `\`${bot.commands.filter(f => f.help.category === '😂 Fun').map(f => f.help.name).join(`\` \``)}\``, true)
            msg.channel.send(embed);
    };

    if (args[0]) {
        let cmd = args[0];
        if (bot.commands.has(cmd)) {
            cmd = bot.commands.get(cmd);
            if (cmd.conf.hidden === true) {
                msg.react('👎');
                return;
            };
            if (cmd.conf.dev === true && !bot.config.ownerID.includes(msg.author.id)) {
                msg.react('👎');
                return;
            };
            var embed2 = new MessageEmbed()
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
            embed2.addField(`${firstUpper(cmd.help.name)}`, `${cmd.help.description}`, false)
            embed2.addField(`Aliases`, `${cmd.help.aliases.sort().join(', ')}`, true)
            embed2.addField(`Usage`, `${cmd.help.usage}`, true)
            embed2.addField(`Group`, `${cmd.help.category}`, true)
            await msg.channel.send(embed2);
        } else {
            msg.react('👎');
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
    description: 'Sends a list of all commands that you can use.',
    usage: 'help (command)'
}
