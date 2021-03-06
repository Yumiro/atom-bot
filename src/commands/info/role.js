const {
    MessageEmbed
} = require('discord.js');
const { utc } = require('moment');

exports.run = async (bot, msg, args) => {
    const argsv2 = msg.content.split(' ').splice(1).join(' ');

    if (argsv2) {
        const role = msg.guild.roles.find(f => f.name === argsv2);
        if (role) {
            msg.channel.send({
                embed: {
                    color: role.hexColor || 'TRANSPARENT',
                    footer: {
                        name: msg.guild.name,
                        iconURL: msg.guild.iconURL()
                    },
                    fields: [
                        {
                            name: 'User  Count',
                            value: `${role.members.size} ${role.members.size < 2 ? 'user' : 'users'}`,
                            inline: true
                        },
                        {
                            name: 'Permissions',
                            value: `${role.permissions.bitfield}`,
                            inline: true
                        },
                        {
                            name: 'Created At',
                            value: `${utc(role.createdAt).format('ddd, MMM Do YYYY')}`,
                            inline: true
                        },
                        {
                            name: 'Mentionable',
                            value: `${role.mentionable ? 'Yes' : 'No'}`,
                            inline: true
                        },
                        {
                            name: 'Hoisted',
                            value: `${role.hoist ? 'Yes' : 'No'}`,
                            inline: true
                        },
                        {
                            name: 'Color',
                            value: `${role.hexColor || 'TRANSPARENT'}`,
                            inline: true
                        },
                        {
                            name: 'Position',
                            value: `${role.position}`,
                            inline: true
                        },
                        {
                            name: 'Mention',
                            value: `<\\@\\&${role.id}\>`,
                            inline: true
                        },
                        {
                            name: 'ID',
                            value: `${role.id}`,
                            inline: true
                        }
                    ]
                }
            });
        } else {
            msg.channel.send({
                embed: {
                    color: 'TRANSPARENT',
                    fields: [{
                            name: firstUpper(this.help.name),
                            value: this.help.description,
                            inline: false
                        },
                        {
                            name: 'Usage',
                            value: this.help.usage,
                            inline: true
                        },
                        {
                            name: 'Example',
                            value: this.help.example,
                            inline: true
                        }
                    ],
                    footer: {
                        text: msg.guild.name
                    }
                }
            });
            return;
        };
    }
};

exports.conf = {
    dev: false
}

exports.help = {
    aliases: ['roleinfo'],
    name: 'role',
    example: 'role green',
    category: '❔ Info',
    description: 'Displays information about a specified role',
    usage: 'role <rolename>'
}