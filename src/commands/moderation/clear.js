const { MessageEmbed } = require('discord.js');

exports.run = async(bot, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.react(':thumbsdown:');
        msg.channel.send(`You can't do that.`);

    } else {

    const number = args.slice(0).join(' ');

    if (!number) {
        const embed = new MessageEmbed()
            .addField('Clear', 'Clears a certain amount of messages in the channel.', false)
            .addField('Usage', 'clear [number between 1 and 100]', true)
            .addField('Example', 'clear 42', true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
        msg.channel.send({ embed });
    };
    if (number) {
            await msg.delete()
            await msg.channel.bulkDelete(parseInt(number)).then(() => {
            console.log(bot.chalk.red(`[ BULK ] ${msg.author.tag} cleared ${number} messages in ${msg.channel.name}`));
            }).catch(err => {
                console.error(err);
            });
    } else {
            msg.channel.send(`Select a number between 1 - 100.`)
    }
}};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['c', 'prune', 'purge'],
    name: 'clear',
    category: '🔨 Moderation',
    description: 'Clears a certain amount of messages in the channel.',
    usage: 'clear [number between 1 and 100]'
}
