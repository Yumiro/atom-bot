const {
    inspect
} = require('util');
const Discord = require('discord.js');

exports.run = (bot, msg, args) => {
    this.bot = bot;

    if (!args[0]) {
        msg.channel.send(`${bot.emojiList.error} I can't run ẻ̷͖̹͐͆͐͗͋͑̍̉͐͋͋̀̽̐͗̈́̑͆̃̐̿̆̀͋̄́̈̎͛̕͝m̶̢͕̖̤͚̻̞͔̜͎̱̯̮̮̻̙̳̳̘̘̟͍̅͊̎͌͒̍͋̊͋̋̄͑͑̔̑̐̂͛̉̊͆͐̚͜͜͝p̸̧̘̭͙̟̬͎͍̱͕̔̏̇̏̑͂̊̆͌̌͛̐̓́̐́̓̀͐̆͛̔̎̇̀̿̆̂͐͛͛͘̕͝͝t̵̡̤̣̦̠̜̀y̸̱̲̭̬͈͆͗̋̅͒̉̐̐̾̃̄̽̎̈́̐́͌̈́͗̔͂̎̂̐̅̔̓̓̂̑̉̇͋͘͘̚͜͝͝͝͝n̵̨̧̛̞̝̞̹͚̺̖̩̱̮̺͎̖͎͈̥͎̤̥̪͖̖͖̪̮͎͚̍̆͌̾̈́́͌̈̔̈̽͌̉̌̋̓̓͆̌̃̆̉͆̚͝ͅe̷̢̨̨̛̟͚͔̘̖̮̖̺̪͖̯̬̻̩̠͇̿̓̀̒̈̽̎͊̏́̊̔̎͛̍̇̍̏͗́̓̒͊̿̂̅̿̈͊̎̉̇̑̎͌͊͒͘̕̕̕͘͠͝͠͠s̵̢̧̞̫͎̻̣̤̘̳̳̬̝̝̯͒̔̉̊̋̔̓̈̀̃͊̊̾̎́̑͒͗͆̐̌̊̚͘͜͝͝͝͝͠͝͝s̴̢̢̢̨͓̱͖̱̜̱̖̙̳͙͎̗͕̜̱̜̞̽̐͋̍͋̍̔̀̽͘̕͜͝ͅ, I need some code`);
    };

    if (args[0]) {

        if (bot.config.ownerID.includes(msg.author.id)) {

            msg.channel.send(`**Input:**\n\`\`\`js\n${args.join(" ")}\n\`\`\``)
                .then((message) => {
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
        };
    }
}

exports.conf = {
    dev: true,
    hidden: false
}

exports.help = {
    aliases: ['js', 'code'],
    name: 'eval',
    category: '🚫 Owner',
    description: 'Evaluates and executes JavaScript code',
    usage: 'eval [code]'
}