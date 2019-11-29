const {
    MessageEmbed
} = require('discord.js');

exports.run = async (bot, msg, args) => {
    if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.channel.send(`you can't do that`);

    } else {

        const number = args.slice(0).join(' ');

        const embed = new MessageEmbed()
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)
            .setTitle(`Message Bulk Delete`)
            .addField(`User`, `${msg.author.tag} (${msg.author.id})`, false)
            .addField(`Messages Deleted`, `${number}`, false)

        if (!number) {
            const embedv2 = new MessageEmbed()
                .addField(firstUpper(this.help.name), this.help.description, false)
                .addField('Usage', this.help.usage, true)
                .addField('Example', this.help.example, true)
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
            msg.channel.send({
                embedv2
            });
        };
        if (number) {
            await msg.delete()
            await msg.channel.bulkDelete(parseInt(number)).then(() => {
                bot.guilds.find(f => f.name === 'atom/dev').channels.find(f => f.id === '613783841869529094').send({
                    embed
                });
                msg.channel.send('ok, done');
            }).catch(err => {
                console.error(err);
            });
        } else {
            msg.channel.send(`has to be a number between 1 and 100, dummy`);
        }
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['c', 'prune', 'purge'],
    name: 'clear',
    example: 'clear 42',
    category: '🔨 Moderation',
    description: 'Clears a certain amount of messages in the channel',
    usage: 'clear [number between 1 and 100]'
}