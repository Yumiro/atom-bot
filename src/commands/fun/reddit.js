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
            var permalink = res.body.data.children[random].data.permalink;
            var url = res.body.data.children[random].data.url;
            var ups = res.body.data.children[random].data.ups;
            var downs = res.body.data.children[random].data.downs;
            if (!url.endsWith('.png' || '.jpg' || '.jpeg')) {
                const embed = new MessageEmbed()
                    .setTitle(args)
                    .setDescription(`[${subreddit}](https://reddit.com${permalink})`)
                    .setColor('TRANSPARENT')
                    .setFooter(`${ups} Upvotes • ${downs} Downvotes`)

                msg.channel.send({
                    embed
                });
            } else {
                const embed = new MessageEmbed()
                    .setTitle(args)
                    .setDescription(`[${subreddit}](https://reddit.com${permalink})`)
                    .setColor('TRANSPARENT')
                    .setImage(url)
                    .setFooter(`${ups} Upvotes • ${downs} Downvotes`)

                msg.channel.send({
                    embed
                });
            };
        };

        /**
         * -- Fixed somewhat T̶O̶D̶O̶:̶ ̶A̶d̶d̶ ̶p̶r̶o̶p̶e̶r̶ ̶i̶m̶a̶g̶e̶ ̶h̶a̶n̶d̶l̶i̶n̶g̶ ̶f̶o̶r̶ ̶p̶o̶s̶t̶s̶ ̶t̶h̶a̶t̶ ̶d̶o̶n̶'̶t̶ ̶h̶a̶v̶e̶ ̶a̶n̶ ̶i̶m̶a̶g̶e̶
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