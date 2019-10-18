const {
    MessageEmbed
} = require('discord.js');
const sig = require('osunext-sig');


exports.run = async (bot, msg, args) => {
    msg.channel.send(sig(args, {
        color: '#7289da',
        game_mode: 0,
        pp_display: 1,
        online_indicator: 3,
        avatar_rounding:  24,
        country_rank: true,
        remove_avatar_margin: false,
        flag_shadow: false,
        flag_stroke: true,
        xp_bar: true,
        xp_color: true
    }))
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['sig'],
    name: 'osu-sig',
    category: '❔ Info',
    description: 'Sends an osu!next(:tm:) image with information on the specified user.',
    usage: 'osu-sig [username]'
}