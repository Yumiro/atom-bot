const {
    MessageEmbed
} = require('discord.js');
const req = require('superagent');

exports.run = async (bot, msg, args) => {
    req.get(`https://www.reddit.com/r/${args}.json`).query({
        limit: 75
    }).set('User-Agent', 'softwaregore-cli').end((err, res) => {
        if (!err && res.ok) {
            var random = Math.floor(Math.random() * (75 - 2 + 1) + 1);
            var subreddit = res.body.data.children[random].data.title;
            const embed = new MessageEmbed()
                .setTitle(args)
                .setDescription(subreddit)
                .setColor('TRANSPARENT')
                .setImage(res.body.data.children[random].data.url ? res.body.data.children[random].data.url : 'http://1x1px.me/FFFFFF-0.png')
                .setFooter(`${res.body.data.children[random].data.ups} Upvotes • ${res.body.data.children[random].data.downs} Downvotes`)
            msg.channel.send({
                embed
            });
        };
    });
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