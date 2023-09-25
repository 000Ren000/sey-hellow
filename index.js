const express = require('express')
const {PORT = 3207} = process.env
const app = express()
const axios = require('axios').default

const TelegramBot = require('node-telegram-bot-api')
const token = '6267511241:AAECCtUtxlBbkbXExvREMKUvFXyFp4iNY14'
// const chatId = '996600001'
const bot = new TelegramBot(token, {polling: true})

const auth = Buffer.from('Администратор:2609').toString('base64')
const url = 'http://localhost/CopyUT/hs/mobile/getUser'
const bodyRequest = { name: 'Фондов'}
getUserAx()

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    const data = handleCommands(msg.text)

    if (data !== '') {
        getUser()
        bot.sendMessage(chatId, data)
    }
})

async function getUser() {
    try {
        const response = await axios({
            url,
            method: 'GET',
            auth: {
                username: 'Администратор',
                password: '2609'
            },
            data: JSON.stringify(bodyRequest),
            responseType: 'json'
        })
        return response.data
    } catch (error) {
        return ''
    }


}


function handleCommands(commands) {


    if (commands === '/getUser') {


        return 'it`s Working'
    }

    return ''
}