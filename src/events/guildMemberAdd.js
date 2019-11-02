module.exports = (bot, msg, member) => {
    const channel = member.guild.channels.find(f => f.name === 'member    logging');
    let replies = [
        `Challenger approaching - ${member} has appeared!`,
        `It's dangerous to go alone, take ${member}!`,
        `${member} just arrived. Seems OP - please nerf.`,
        `Cheers, love! ${member} is here!`,
        `${member} joined. You must construct additional pylons.`,
        `${member} just joined. Can I get a heal?`,
        `A wild ${member} appeared.`,
        `${member} is here, as the prophecy foretold.`,
        `${member} is here to kick butt and chew bubblegum. And ${member} is all out of gum.`,
        `${member} hopped into the server. Kangaroo!!`,
        `${member} has joined the server! It's super effective!`,
        `${member} has arrived. Party's over.`,
        `Welcome ${member}. Leave your weapons by the door.`,
        `Hello. Is it ${member} you're looking for?`,
        `Big ${member} showed up!`,
        `${member} just joined the server - glhf!`,
        `Welcome, ${member}. We hope you brought pizza.`,
        `${member} has joined. Stay awhile and listen!`,
        `Ha! ${member} has joined! You activated my trap card!`,
        `Ermahgerd. ${member} is here.`,
        `Welcome, ${member}. We were expecting you ( ͡° ͜ʖ ͡°)`,
        `${member} just showed up. Hold my beer.`,
        `Brace yourselves. ${member} just joined the server.`,
        `It's a bird! It's a plane! Nevermind, it's just ${member}.`,
        `${member} joined your party.`,
        `Roses are red, violets are blue, ${member} joined this server with you.`,
        `${member} just joined. Hide your bananas.`,
        `Swoooosh. ${member} just landed.`,
        `${member} just slid into the server.`,
        `Where's ${member}? In the server!`,
        `It's ${member}! Praise the sun! \\[T]/`,
        `Never gonna give ${member} up. Never gonna let ${member} down.`,
    ];
    let result = Math.floor(Math.random() * replies.length);
    channel.send(`${replies[result]}`);
}