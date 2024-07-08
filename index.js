import { Client, Events, MessageType } from "@mengkodingan/ckptw";


const bot = new Client({
    prefix: "!",
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: '6289603982787' // phone number, e.g 62xxxxx
});

bot.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});

bot.command('ping', async(ctx) => ctx.reply({ text: 'pong!' }));

bot.launch();