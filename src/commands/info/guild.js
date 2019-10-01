const {
  MessageEmbed
} = require('discord.js');

const moment = require('moment');

exports.run = async (bot, msg, args) => {
  let level = '';
  let content = '';

  if (msg.guild.verificationLevel === 0) {
    level = `Unrestricted`;
  } else if (msg.guild.verificationLevel === 1) {
    level = `Verified Email`;
  } else if (msg.guild.verificationLevel === 2) {
    level = `Registered (5 min)`;
  } else if (msg.guild.verificationLevel === 3) {
    level = `Server Member (10 min)`;
  } else if (msg.guild.verificationLevel === 4) {
    level = `Verified Phone`;
  }

  if (msg.guild.explicitContentFilter === 0) {
    content = `Grandma's tea party`
  } else if (msg.guild.explicitContentFilter === 1) {
    content = `Trusted membership`;
  } else if (msg.guild.explicitContentFilter === 2) {
    content = `Squeaky clean shine`;
  }

  const embed = new MessageEmbed()
    .setThumbnail(msg.guild.iconURL)
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .setColor('TRANSPARENT')
    .addField('User Count', `${msg.guild.members.size} users`, true)
    .addField('Channel Count', `${msg.guild.channels.size} channels`, true)
    .addField(`Roles (${msg.guild.roles.size})`, `Use \`${bot.config.prefix}roles\``, true)
    .addField('Created At', `${moment.utc(msg.guild.createdAt).format('ddd, MMM Do YYYY')}`, true)
    .addField('Large', `${msg.guild.large ? 'Very' : 'No'}`, true)
    .addField('Owner', `<@${msg.guild.ownerID}>`, true)
    .addField('Content Filter', content, true)
    .addField('Verified', `${msg.guild.verified ? 'Yes' : 'No'}`, true)
    .addField('Verification Level', level, true)

  msg.channel.send({
    embed
  });
};

exports.conf = {
  dev: false
}

exports.help = {
  aliases: ['server', 'serverinfo', 'guildinfo'],
  name: 'guild',
  category: '❔ Info',
  description: 'Displays information about the current guild.',
  usage: 'guild'
}