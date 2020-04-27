/* eslint-disable no-unused-vars */
import '../src/utils/dotenv';
import Telegram from 'telegram-bot-api';

const api = new Telegram({
  token: process.env.FASB_TELEGRAM_TOKEN,
});

function sendMessage(msg) {
  const param = {
    chat_id: process.env.FASB_TELEGRAM_CHAT,
    text: msg,
  };

  api
    .sendMessage(param)
    .then(data => {
      console.log('Telegram message sent');
    })
    .catch(err => {
      console.log('Telegram - error:', err);
    });
}

function teste(str) {
  if (str.indexOf('ORA-12170') !== -1) {
    return `ok`;
  }
  return '';
}

sendMessage(teste('ORA-12170'));
