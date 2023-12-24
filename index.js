const express = require('express');
const { PORT = 3207 } = process.env;
const app = express();
const api = require('./Api')
const { json } = require('express');

app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`)
})

app.get('/', async (req, res) => {
    res.send(
        `<html>
        <body>
            <h1>Ответ на сигнал из далёкого космоса</h1>
        </body>
        </html>`
    );
    const ip = getRequestIpAddress(req)
    console.log('Get порта 3207, ip: ' + ip)
    const users = await api.getUser()
    console.log(users);
})

const getRequestIpAddress = request => {

    const client = request.connection ?? request.socket ?? request.info;
    if (client) {
        return client.remoteAddress ?? null;
    }
    return null;
}