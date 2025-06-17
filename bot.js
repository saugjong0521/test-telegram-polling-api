import TelegramBot from 'node-telegram-bot-api';

console.log("Bot started");


const token = '7901130413:AAG81hVH8_KmSfN6fw1jly2VqFv-c0XaEL0';
const bot = new TelegramBot(token, { polling: true });

// polling msg 를 통해서 채널 ID확인 (채널 ID는 -로 시작함)
const TARGET_GROUP_ID = -4885110324;


bot.on("message", (msg) => {

  // 내 채널이 아닌 경우 무시
  if (msg.chat.id !== TARGET_GROUP_ID) return;

  // console.log(JSON.stringify(msg, null, 2)); 전체 메시지 객체 (채널 ID 받을 때에 확인)

  const userId = msg.from.id;
  const username = msg.from.username || `${msg.from.first_name} ${msg.from.last_name || ""}`.trim();
  const text = msg.text;
  const timestamp = new Date(msg.date * 1000); // UNIX 타임스탬프 → JS Date
  const formattedTime = `${timestamp.getFullYear()}.${String(timestamp.getMonth() + 1).padStart(2, '0')}.${String(timestamp.getDate()).padStart(2, '0')}`;

  if (text?.toLowerCase() === 'gm') {

    console.log(`${formattedTime} ${username}`)
  }

});
