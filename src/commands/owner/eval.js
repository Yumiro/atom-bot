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
                var code = JSON.stringify(eval(args.join(" ")));
                var token = bot.config.token;
                for (var key in token)
                {
                    if (code && code.includes(token))
                    {
                    msg.react('👎')
                    return;
                }
            }
                message.edit(`**Input:**\n\`\`\`js\n${args.join(" ")}\n\`\`\` \n` + `**Output:**\n\`\`\`js\n${require('util').inspect(code, {compact: true, depth: 0})}\n\`\`\` \n`).catch(err => {
                    msg.channel.send(`\`\`\`js\n${err}\n\`\`\``)
                });
        }).catch(err => {
            msg.channel.send(`\`\`\`js\n${err}\n\`\`\``)
        });
    }
}};

exports.conf = {
    dev: true
}

exports.help = {
    name: 'eval',
    category: '🚫 Owner',
    description: 'Evaluates JavaScript code.',
    usage: 'eval [code]'
}
