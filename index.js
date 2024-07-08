import { Client, Events, MessageType } from "@mengkodingan/ckptw";


const bot = new Client({
    prefix: "!",
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: 'YOUR_PHONE-NUM' // phone number, e.g 62xxxxx
});

bot.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});

bot.command('ping', async(ctx) => ctx.reply({ text: 'pong!' }));

bot.launch();