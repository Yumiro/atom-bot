const {
    MessageEmbed
} = require('discord.js');
const req = require('superagent');

exports.run = async (bot, msg, args) => {
    try {
    req.get(`https://www.reddit.com/r/${args}.json`).query({
        limit: 75
    }).set('User-Agent', 'softwaregore-cli').end((err, res) => {
        if (!err && res.ok) {
            var random = Math.floor(Math.random() * (75 - 2 + 1) + 1);
            var subreddit = res.body.data.children[random].data.title;
            var url = res.body.data.children[random].data.url;
            var ups = res.body.data.children[random].data.ups;
            var downs = res.body.data.children[random].data.downs;
            const embed = new MessageEmbed()
                .setTitle(args)
                .setDescription(subreddit)
                .setColor('TRANSPARENT')
                .setFooter(`${ups} Upvotes • ${downs} Downvotes`)

            if (url.length > 1) {
                embed.setImage(url);
            }

            msg.channel.send({
                embed
            });
        } catch(err) {
            message.channel.send('No subreddit found!')   
        }
            
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
    description: 'Sends a random post from a specified subreddit :shower:',
    example: 'reddit softwaregore',
    usage: 'reddit [subreddit]'
}
