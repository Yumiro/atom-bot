const {
    MessageEmbed
} = require('discord.js');
const rbx = require('noblox.js');
exports.run = async (bot, msg, args) => {
    let username = args[0];
    if (username) {
        rbx.getIdFromUsername(username).then(id => {
            if (id) {
                rbx.getPlayerInfo(parseInt(id)).then(function(info) {
                    let date = new Date(info.joinDate)
                    let dateInfo = extractDate(date)
                    let embed = new MessageEmbed()
                    .setColor('TRANSPARENT')
                    .setURL(`https://roblox.com/users/${id}/profile`)
                    .setTimestamp()
                    .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                    .addField('Username', info.username || 'Unresolvable', true)
                    .addField('User ID', id || 'Unresolvable', true)
                    .addField('Blurb', info.blurb || 'Nothing', true)
                    .addField('Status', info.status || 'Nothing', true)
                    .addField('Account Age', `${info.age} days old` || 'Unresolvable')
                    .addField('Register Date', `${dateInfo.month}/${dateInfo.day}/${dateInfo.year}` || 'Unresolvable')
                    .addField('User Link', `https://roblox.com/users/${id}/profile`)
                    msg.channel.send({
                        embed
                    })
                })
            } else {
                const embed = new MessageEmbed()
                .addField(firstUpper(this.help.name), this.help.description, false)
                .addField('Usage', this.help.usage, true)
                .addField('Example', this.help.example, true)
                .setColor('TRANSPARENT')
                .setFooter(msg.guild.name)
                msg.channel.send({
                    embed
                });
            }
        })
    }
};
exports.conf = {
    dev: false
}
exports.help = {
    aliases: ['rbx-user', 'roblox-user', 'roblox-userinfo'],
    name: 'rbx-userinfo',
    category: '❔ Info',
    description: 'Sends information about a specific Roblox user :white_medium_square:',
    example: 'rbx-userinfo FlagOfTheObby',
    usage: 'rbx-userinfo [user name]'
}
