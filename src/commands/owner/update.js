const {
    exec
} = require('child_process');
exports.run = async (bot, msg, args) => {
    exec('git pull', {
        cwd: __dirname
    }, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            msg.channel.send(`${bot.emojiList.error} Something went wrong. Check the console for any errors.`);
        } else {
            msg.channel.send(`${bot.emojiList.check} I am now up to date.`);
            console.log(stdout);
        };
    });
};

exports.conf = {
    dev: true,
    hidden: false
};

exports.help = {
    aliases: ['u', 'pull'],
    name: 'update',
    category: '🚫 Owner',
    description: 'Git pull nonsense:',
    usage: 'update'
};