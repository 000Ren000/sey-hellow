const express = require('express');
const { PORT = 3207 } = process.env;
const app = express();


const TelegramBot = require('node-telegram-bot-api');
const token = '5736645804:AAFo3eb8VrSJYdD2ISvPQlw-CFrE3aUWlKI';
const chatId = '996600001'
const bot = new TelegramBot(token, {polling: true});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, msg.text);
});

app.get('/', (req, res) => {
    res.send(
        `<html>
        <body>
            <h1>Ответ на сигнал из далёкого космоса</h1>
        </body>
        </html>`
    );
    const ip = getRequestIpAddress(req)
    bot.sendMessage(chatId, 'Get порта 3207, ip: ' + ip)
    console.log(chatId, 'Get порта 3207, ip: ' + ip)
})

const getRequestIpAddress = request => {

    const client = request.connection ?? request.socket ?? request.info;
    if (client) {
        return client.remoteAddress ?? null;
    }
    return null;
}