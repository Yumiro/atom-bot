

exports.run = async(bot, msg, args) => {
    if (!bot.config.ownerID.includes(msg.author.id)) {
        msg.react('👎');
    };

    if (bot.config.ownerID.includes(msg.author.id)) {
       const { exec } = require('child_process');
exec('git pull https://github.com/Yumiro/atom69', { 
cwd: __dirname 
}, (err, stdout, stderr) => {
 if (err) return reject(err); 
console.log(stdout); 
}); 
msg.react('👍');
}

exports.conf = {
    dev: true
}

exports.help = {
    name: 'update',
    category: '🚫 Owner',
    description: 'Git pull nonsense.',
    usage: 'update'
}
