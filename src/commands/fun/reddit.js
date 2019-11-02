const {
    MessageEmbed
} = require('discord.js');
const req = require('superagent');

exports.run = async (bot, msg, args) => {
    if (args) {
        req.get(`https://www.reddit.com/r/${args}.json`).query({
            limit: 75
        }).set('User-Agent', 'softwaregore-cli').end((err, res) => {
            if (!err && res.ok) {
                var random = Math.floor(Math.random() * (75 - 2 + 1) + 1);
                var subreddit = res.body.data.children[random].data.title;
                const embed = new MessageEmbed()
                    .setTitle(firstUpper(args))
                    .setDescription(subreddit)
                    .setColor('TRANSPARENT')
                    .setImage(res.body.data.children[random].data.url)
                    .setFooter(`${res.body.data.children[random].data.ups}⬆  ${res.body.data.children[random].data.downs}⬇`)
                msg.channel.send({
                    embed
                });
            };
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
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['sub'],
    name: 'reddit',
    category: '😂 Fun',
    description: 'Sends a random post from a specified subreddit.',
    example: 'reddit softwaregore',
    usage: 'reddit [subreddit]'
}