const {
    MessageEmbed
} = require('discord.js');
const {
    req
} = require('snekfetch');

exports.run = async (bot, msg, args) => {

    let thumbnails;
    let messages;
    let titles;
    await req.get(`https://www.reddit.com/r/${args[0]}/top.json?t=${args[1]}`).then(body => {
        thumbnails = body.data.children[0].data.thumbnail;
        titles = body.data.children[0].data.title;
        message = body.data.children[0].data.permalink;
    });
    if (args[0]) {
        if (args[1]) {
            const embed = new MessageEmbed()
                .setTitle(args[0])
                .setURL(`https://reddit.com${message}`)
                .setDescription(titles.replace('amp', ''))
                .setThumbnail(thumbnails)
            msg.channel.send({
                embed
            });
        } else {
            const embedv2 = new MessageEmbed()
                .addField(firstUpper(this.help.name), this.help.description, false)
                .addField('Usage', this.help.usage, true)
                .addField('Example', this.help.example, true)
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
            msg.channel.send({
                embedv2
            });
        }
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['sub'],
    name: 'reddit',
    category: '😂 Fun',
    description: 'Sends the top posts from a specified subreddit.',
    example: 'reddit softwaregore year',
    usage: 'reddit [subreddit] [all|year|month|week|day|hour]'
}