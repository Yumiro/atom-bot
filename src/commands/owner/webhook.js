const { WebhookClient } = require('discord.js');
exports.run = async(bot, msg, args) => {
    const Hook = new WebhookClient(`614792316145631235`, `7IRjEHkEer9jPleNohDxkziA5TNWsldJ7KGYlvby3NlZp7juW3q8ayFx2_jObwrdb7Wj`);
    if (bot.config.ownerID.includes(msg.author.id)) {
        msg.delete();
        Hook.send(args.join(' '));
    } else {
        return;
    };
};

exports.conf = {
    dev: true,
    hidden: false
}

exports.help = {
    aliases: ['hook'],
    name: 'webhook',
    category: '🚫 Owner',
    description: 'Webhooks.',
    usage: 'webhook [message]'
}
