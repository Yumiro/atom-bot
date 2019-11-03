const {
    exec
} = require('child_process');
exports.run = async (bot, msg, args) => {
    exec('git pull', {
        cwd: __dirname
    }, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
        } else {
            msg.channel.send(`ok`);
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
    description: 'Git pull nonsense :arrows_counterclockwise:',
    usage: 'update'
};