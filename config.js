const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Bhacker.com"
global.location="assam,india."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "PLEASE DM MY OWNER BHACKER";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HAGxgim2IfIALNxYhSiKa1";
global.website=process.env.GURL || "https://chat.whatsapp.com/HAGxgim2IfIALNxYhSiKa1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "BHACKER" 


global.devs = "919401105736" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919401105736";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_55_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU0R095Uzl5U294VFpnc2lLeDlZRUUrTG5rM3FLT3NKOHF2Z0JreERTVVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9haUhJcndlU3BTeUktU0Q2ekdXTXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjc0MzRlNjYtZGEzZC00NWU4LWE4MjgtNTJkMzY5OTEwNjY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMTU0LFxuICAgICAgNDMsXG4gICAgICAxMSxcbiAgICAgIDExNSxcbiAgICAgIDEyNixcbiAgICAgIDIxMSxcbiAgICAgIDEzMixcbiAgICAgIDE3MixcbiAgICAgIDExOCxcbiAgICAgIDE5MixcbiAgICAgIDIwNyxcbiAgICAgIDE4MyxcbiAgICAgIDExOSxcbiAgICAgIDIxLFxuICAgICAgNSxcbiAgICAgIDIyOSxcbiAgICAgIDE3MixcbiAgICAgIDI1MyxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NixcbiAgICAgIDE0MixcbiAgICAgIDE4LFxuICAgICAgMTQ1LFxuICAgICAgMjI0LFxuICAgICAgMjE3LFxuICAgICAgMjE0LFxuICAgICAgMjAzLFxuICAgICAgMzksXG4gICAgICA3OSxcbiAgICAgIDIwOSxcbiAgICAgIDgxLFxuICAgICAgNTQsXG4gICAgICAyNTAsXG4gICAgICAyMDMsXG4gICAgICAyMDQsXG4gICAgICAyMjMsXG4gICAgICA3NSxcbiAgICAgIDE4MixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBM0xWWURXNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NDAxMTA1NzM2OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ3ODIyNzUwNjM4ODA6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJPek1BQ0VOanMzcmNHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxeFZXNzdQQ3ZaNzV1T01IVlFobm9iNXJpbWZuS3BnaFFhdERBdUY4TGljPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlQyZlZhSDNwOWY1NTNuOXRTeTNOczJmMlhlRFhNNnY2NXFucHJFQ1dMcjdkVHY3MXJnNnMvam5mRCtUUkJ6Ym9HSGpRdW5zd0MzY1NRZkt1NmlWbEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZFcmszN0lURDVmUXc3eUZCZjlpT3FhTWd2TkxMYUo2Zk9OM3hKS0FrWElrOWZqd0F4VSthOW5oZHpMT3BVYmxGZEhFTE9YYkRJRWpwL1psdjJUK2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTQwMTEwNTczNjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzUxMDExNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: BHACKER-Md-2.0 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ BHACKER ® 』```",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BHACKER-MD-2.0",
  ownername:process.env.OWNER_NAME|| "BHACKER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
