const { MessageEmbed } = requre('discord.js');
const moment = require('moment');

exports.run = async(bot, msg, args) => {
    let level = '';
    let content = '';

    if (message.guild.verificationLevel === 0) {
		level = `None • Unrestricted`;
	} else if (message.guild.verificationLevel === 1) {
		level = `Low • Verified Email on Discord`;
	} else if (message.guild.verificationLevel === 2) {
		level = `Medium • Registered on Discord for 5 minutes`;
	} else if (message.guild.verificationLevel === 3) {
		level = `(╯°□°）╯︵ ┻━┻ • Member on this Server for 10 minutes`;
	} else if (message.guild.verificationLevel === 4) {
		level = `┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻ • Verified Phone on Discord`;
    }

    if (message.guild.explicitContentFilter === 0) {
		content = `Scanning Off • No party like grandma's tea party`
	} else if (message.guild.explicitContentFilter === 1) {
		content = `Scanning On • Roles for trusted membership`;
	} else if (message.guild.explicitContentFilter === 2) {
		content = `Scanning On • Squeaky clean shine`;
    }
    
    const embed = new MessageEmbed()
        .setThumbnail(`${msg.guild.iconURL}`)
        .setAuthor(msg.guild.name, msg.guild.iconURL)
        .setColor(0x7289da)
        .addField('User Count', `${msg.guild.members.size} users`, true)
        .addField('Channel Count', `${msg.guild.channels.size} channels`, true)
        .addField(`Roles (${msg.guild.roles.size})`, `use \`!roles\``, true)
        .addField('Created At', `${moment.utc(msg.guild.createdAt).format('dddd, MMMM Do YYYY')}`, true)
        .addField('Large', `${msg.guild.large ? 'Very' : 'No'}`, true)
        .addField('Owner', `<@${msg.guild.ownerID}>`, true)
        .addField('Content Filter', content, true)
        .addField('Verified', `${msg.guild.verified ? 'Yes' : 'No'}`, true)
        .addField('Verification Level', level, true)
    
    msg.channel.send({ embed });
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['server', 'serverinfo'],
    name: 'guild',
    category: '❔ Info',
    description: 'Displays information about the current guild.',
    usage: 'guild'
}
