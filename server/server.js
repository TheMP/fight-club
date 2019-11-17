const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const cors = require('cors')
require('dotenv').config()
const shortId = require('shortid')
const axios = require('axios')

const accessToken = process.env.DIALOGFLOW_ACCESS_TOKEN
const baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';

const send = async (sessionId, message) => {
  const data = {
    query: message,
    lang: 'en',
    sessionId
  }
  return axios.post(baseURL, data, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

const app = express()

console.log("1");

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}))

console.log("2");

app.use(bodyParser.json())

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: 'eu',
  encrypted: true
})

app.post('/message', async (req, res) => {
  // simulate actual db save with id and createdAt added
  console.log(req.body);
  const chat = {
    ...req.body,
    id: shortId.generate(),
    createdAt: new Date().toISOString()
  }
  //update pusher listeners
  pusher.trigger('chat-bot', 'chat', chat)

  const response = await send(chat.session, chat.message);

  let msgSplits = `${response.data.result.fulfillment.speech}`.split('|');
  // actual reply from bot
  let message = msgSplits[0];
  // comment from our App
  let comment = msgSplits[1];
  // label indicating this message is SUCCESS, WARNING, ERROR
  let messageLabel = msgSplits[2];
  // label indicating this whole conversation is SUCCEED, IN_PROGRESS or FAILED
  let conversationLabel = msgSplits[3];
  // trigger this update to our pushers listeners
  pusher.trigger(chat.session, 'dataflow', {
    message,
    comment,
    messageLabel,
    conversationLabel,

  })
  res.send(chat)
})

app.listen(process.env.PORT || 5000, () => console.log('Listening at 5000'))