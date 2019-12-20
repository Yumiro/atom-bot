const {
    MessageEmbed
} = require('discord.js');
const req = require('superagent');

exports.run = async (bot, msg, args) => {
    req.get(`https://api.nasa.gov/planetary/apod`).query({
        hd: true,
        api_key: bot.config.nasaAPI
    }).set('User-Agent', 'atom-bot').end((err, res) => {
        if (!err && res.ok) {
            var img = res.body.hdurl;
            var desc = res.body.explanation;
            var title = res.body.title;
            var date = res.body.date;
            const embed = new MessageEmbed()
                .setTitle(title)
                .setDescription(desc)
                .setColor('TRANSPARENT')
                .setImage(img)
                .setFooter(`${date}`)

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
    aliases: ['apotd', 'nasa-apod', 'nasa-astronomy', 'astronomypictureoftheday', 'astronomy-picture-of-the-day'],
    name: 'apod',
    category: '😂 Fun',
    description: 'Astronomy picture of the day, taken from NASA',
    example: 'apod',
    usage: 'apod'
}