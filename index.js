import { Client, Events, MessageType } from "@mengkodingan/ckptw";


const bot = new Client({
    prefix: "!",
    printQRInTerminal: false, // set to true if you want to use qr
    readIncommingMsg: true,
    usePairingCode: true, // set to false if you want using qr
    phoneNumber: 'YOUR_PHONE-NUM' // phone number, e.g 62xxxxx
});

bot.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});

bot.command('ping', async(ctx) => ctx.reply({ text: 'pong!' }));

bot.launch();