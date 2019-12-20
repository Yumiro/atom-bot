const {
    MessageEmbed
} = require('discord.js');
const req = require('superagent');

exports.run = async (bot, msg, args) => {
    req.get(`https://www.reddit.com/r/${args}/random.json`).query({
        limit: 75
    }).set('User-Agent', 'softwaregore-cli').end((err, res) => {
        if (!err && res.ok) {
            let content = JSON.parse(res.body);
            var subreddit = content[0].data.children.data.title;
            var url = content[0].data.children.data.url;
            var ups = content[0].data.children.data.ups;
            var downs = content[0].data.children.data.downs;
            if (!url.endsWith('.png' || '.jpg' || '.jpeg')) {
                const embed = new MessageEmbed()
                    .setTitle(args)
                    .setDescription(`[${subreddit}](${url})`)
                    .setColor('TRANSPARENT')
                    .setFooter(`${ups} Upvotes • ${downs} Downvotes`)

                msg.channel.send({
                    embed
                });
            } else {
                const embed = new MessageEmbed()
                    .setTitle(args)
                    .setDescription(`[${subreddit}](${url})`)
                    .setColor('TRANSPARENT')
                    .setImage(url)
                    .setFooter(`${ups} Upvotes • ${downs} Downvotes`)

                msg.channel.send({
                    embed
                });
            };
        };

        /**
         * TODO: Add proper image handling for posts that don't have an image
         */

    });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['sub'],
    name: 'reddit',
    category: '😂 Fun',
    description: 'Sends a random post from a specified subreddit',
    example: 'reddit softwaregore',
    usage: 'reddit [subreddit]'
}