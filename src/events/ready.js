module.exports = (bot) => {
    bot.user.setActivity('!? • !help', { type: 'WATCHING' })
    console.log(bot.chalk.green('[ CONN ] Successfully logged into Discord'));
}