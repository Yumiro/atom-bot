const { inspect } = require('util');

exports.run = (bot, msg, args) => {
    if (!bot.config.ownerID.includes(msg.author.id)) {
        msg.react('👎');
    };

    if (!args[0]) {
        msg.react('👎');
    };

    if (args[0]) {

        if (bot.config.ownerID.includes(msg.author.id)) {

        msg.channel.send(`**Input:**\n\`\`\`js\n${args.join(" ")}\n\`\`\``)
            .then((message) => 
            {
                var code = eval(args.join(" "));
                if (args.includes('bot.token')) {
                    return;
                }
                if (args.includes('bot.config')) {
                    return;
                }
                message.edit(`**Input:**\n\`\`\`js\n${args.join(" ")}\n\`\`\` \n` + `**Output:**\n\`\`\`js\n${inspect(code, {compact: true, depth: 0})}\n\`\`\` \n`).catch(err => {
                    msg.channel.send(`\`\`\`js\n${err}\n\`\`\``)
                });
        }).catch(err => {
            msg.channel.send(`\`\`\`js\n${err}\n\`\`\``)
        });
    }
}};

exports.conf = {
    dev: true,
    hidden: false
}

exports.help = {
    aliases: ['js', 'code'],
    name: 'eval',
    category: '🚫 Owner',
    description: 'Evaluates JavaScript code.',
    usage: 'eval [code]'
}
