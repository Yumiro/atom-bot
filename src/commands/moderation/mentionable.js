const {
    MessageEmbed
} = require('discord.js');

exports.run = (bot, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_ROLES')) {
        msg.channel.send(`${bot.emojiList.error} You can't do that, you're missing the \`MANAGE_ROLES\` permission.`);

    } else {

        const argsv2 = msg.content.includes('true') || msg.content.includes('false');
        const role = msg.guild.roles.find(f => f.name === args.slice(1).join(' '));

        if (!argsv2 || !role) {
            const embed = new MessageEmbed()
                .addField(firstUpper(this.help.name), this.help.description, false)
                .addField('Usage', this.help.usage, true)
                .addField('Example', this.help.example, true)
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
            msg.channel.send({
                embed
            });
        };
        if (msg.content.includes('true') && role) {
            role.setMentionable(true, `[${msg.author.tag}]`);
            console.log(bot.chalk.green(`[ ROLE ] ${role.name} was set as mentionable by ${msg.author.tag}`));
            msg.channel.send(`${bot.emojiList.check} Succesfully made **${role.name}** mentionable.`);
        };

        if (msg.content.includes('false') && role) {
            role.setMentionable(false, `[${msg.author.tag}]`);
            console.log(bot.chalk.red(`[ ROLE ] ${role.name} was set as unmentionable by ${msg.author.tag}`));
            msg.channel.send(`${bot.emojiList.check} Successfully made **${role.name}** unmentionable.`);
        };
    };
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['setmentionable'],
    name: 'mentionable',
    example: 'mentionable true blue',
    category: '🔨 Moderation',
    description: 'Sets the specified role mentionable or unmentionable',
    usage: 'mentionable true or false [rolename]'
}