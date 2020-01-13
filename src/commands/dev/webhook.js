const {
    WebhookClient
} = require('discord.js');
exports.run = async (bot, msg, args) => {
    const Hook = new WebhookClient(bot.config.webhookID, bot.config.webhookTOKEN);
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
    category: '🧪 Development',
    description: 'Updates webhook',
    usage: 'webhook [message]'
}