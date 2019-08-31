const { MessageEmbed } = require('discord.js'); 
const snekfetch = require('snekfetch');

exports.run = async(bot, msg, args) => {
    if (!args[0] || !args[1]) {
        const emb = new MessageEmbed()
            .addField(bot.firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)

        msg.channel.send(emb);
        return;
    };

    if (args[2]) {
        const embed = new MessageEmbed()
            .addField(bot.firstUpper(this.help.name), this.help.description, false)
            .addField('Usage', this.help.usage, true)
            .addField('Example', this.help.example, true)
            .setColor('TRANSPARENT')
            .setFooter(msg.guild.name)

        msg.channel.send(embed);
        return;
    };

    let name1 = args[0];
    let name2 = args[1];

    name1 = encodeURIComponent(name1);
    name2 = encodeURIComponent(name2);

    let love = await snekfetch.get(`https://love-calculator.p.mashape.com/getPercentage?fname=${name1}&sname=${name2}`)
        .set('X-Mashape-Key', 'r5bYmmflHamshDFeaatGAIdpgcWfp1ta7apjsnEQBKuForD34R')
        .set('Accept', 'application/json')

    let love_name = love.body.fname;
    let love_name_2 = love.body.sname;
    let love_percentage = love.body.percentage;
    let love_text = love.body.result;
    let heart = love_percentage > 50 ? ':heart:' : ':broken_heart:';

    const love_embed = new MessageEmbed()
        .setColor('TRANSPARENT')
        .setDescription(`${heart} ${love_text} (${love_percentage}%)`)

    msg.channel.send(love_embed);
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['l', 'ship'],
    name: 'love',
    category: '😂 Fun',
    description: 'Calculates the love between 2 names.',
    usage: 'love [name1] [name2]'
}
