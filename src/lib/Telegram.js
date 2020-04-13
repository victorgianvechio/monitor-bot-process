/* eslint-disable no-unused-vars */
// 530349061 victor
// https://api.telegram.org/bot{token}/getUpdates

// import '../utils/dotenv';
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

export default sendMessage;
