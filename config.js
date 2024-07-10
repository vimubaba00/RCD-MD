//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94781226144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURJUGhrSXdoV1ZQLzZwdUs0Y1FRNnJtT08xUFBtNzVoS0VGZllmUnkzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmNvRkk4WSsxNTZ4aWJaNFMwMTNIRVRtbEt5b2s5bmZ2R2hqVmVaVy9qZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRjlCVDJJN2J3aUsvWFo3Kzd6RDlhNUgwNHp6ZzFkU1BNSW05RHhJbUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdEc0MUpnZnY2NkhMNzFqSG5ZUEpBMGVGM3RYUlR3L3Q5TDJqSTUwdzBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLR29CKzEzYmNMU0VVblZndVlpVzgvTlBEMWlHQlJtek1HazhZc2k2VXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllaMmVXV3IwQXlFcDhtTWRqNXpSdU5vY0FRdkVPQTJrWlVYNEdESCtzbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURXZ0o4RW52VzNrR2E3M3dYdzdJRXN6Z3NtREdwSmlBMHFkYWJCRzNXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2U2dDdINStMdXNyQ09LNEJZRXBKTStrV2pEUHJxU0lBZk12Y1k5Vjh6TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVkWFFPcHEwaEtOaVp2QWUvc013NTlZSGlsRWJMUUpBZVNIb3Z2K2FxTzRtQ0thVHpmYkFVT293aThzOTVDbTkzMGNWbGl0TWdjTzNNR3dsYldOaEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJkQXJVVE5Ia1ZlK2liNFdkTzJ6b0xNNk1CZmtucjQvbXFKZFdYKzUwYW5vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFdnV6cmVVQVNSMmYwSHUwSW1tMnJ3IiwicGhvbmVJZCI6ImM5MDM0N2I0LTZiYmEtNGEwMy1iOWZlLTRkNzVjYzhjNDllZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSmRVTTVrZW9ZZjJERWI3MXU4Mll6RzZzbFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnBJbFNHWGZucTZvVDJkcVhnSHZ5R040QzhVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iks3Q05HN0E0IiwibWUiOnsiaWQiOiI5NDc4MTIyNjE0NDo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIPCdkJXwnZCI8J2QjPCdkJQgICDwnZCS8J2Qk/CdkIDwnZCR8J2QkyA88J2QlvCdkIDwnZCI8J2Qkz4gICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgIPCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnJ5ZkVHRUx2Y3ViUUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlK2N4ekRzSUdCMFdHWVNYRllwU1oyRGxVeGtoKzROZ2tGdlNrTmR1MjFBPSIsImFjY291bnRTaWduYXR1cmUiOiJ6bmUweXg3RkNubTJpb05BV2NhZkhhaWRiR3lBSG40R3BHUTRCaUx3S3FQaCtaNzJ3dHMwbFdtTXNyeDZOOWFuVElGdGk3S2FHOUhQU0FIMTd6cjNCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWnoyVnpybmF3YTVBNVFqRzVTNHNpS0lyNG9RQUZHN3U1QnZlTitBTkowVlQ5MkZ2QVR4bmJya05FaU9vd1BBYmlpQUtRemI4ZHVtSGk4c0RaalgyQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTIyNjE0NDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh2bk1jdzdDQmdkRmhtRWx4V0tVbWRnNVZNWklmdURZSkJiMHBEWGJ0dFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2MTAzNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSC8zIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
