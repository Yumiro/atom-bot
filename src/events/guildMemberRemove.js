module.exports = (bot, msg, member) => {
    const channel = member.guild.channels.find(f => f.name === 'member    logging');
    let replies = [
        `${member} has disappeared - not challenging enough.`,
        `Looks like you forgot to take ${member} with you.`,
        `${member} left. They seemed too weak - please buff next time.`,
        `${member} just left.`,
        `${member} left. They stole our additional pylons.`,
        `${member} just left. This is so not epic.`,
        `A wild ${member} disappeared.`,
        `${member} is not here anymore, unfortunately.`,
        `${member} is not here to kick butt and chew bubblegum. They left.`,
        `${member} left - they weren't a Kangaroo.`,
        `${member} has left the server. It's not effective.`,
        `${member} has left. PARTY HARD!!!`,
        `Goodbye ${member}. Don't forget to take your weapons.`,
        `Bye. Was it ${member} you were looking for? Probably not, because they just left.`,
        `${member} left the server. This is so sad, Alexa play Despacito.`,
        `${member} just left the server - they were unlucky and did not have fun.`,
        `Goodbye, ${member}. Don't forget to bring pizza next time.`,
        `${member} has left. You can all go play now.`,
        `Oh no, ${member} left. You deactivated my trap card.`,
        `NotLikeThis, ${member} left.`,
        `Goodbye, ${member} ( ͡ ͡° ͡° ʖ ͡° ͡°)`,
        `${member} just left. Give me my beer.`,
        `${member} left. You can stop embracing yourselves.`,
        `It was either a bird or a plane, because ${member} just left.`,
        `${member} left your party.`,
        `Roses are red, violets are blue, ${member} left this server without you.`,
        `${member} just left. Show your bananas.`,
        `Swoooop. ${member} just left.`,
        `${member} just left the server.`,
        `Where's ${member}? Not in this server anymore.`,
        `${member} left. Do not praise the sun /[⊥]\\`,
        `Always gonna give ${member} up. Always gonna let ${member} down, because they left.`,
    ];
    let result = Math.floor(Math.random() * replies.length);
    channel.send(`oop`);
}