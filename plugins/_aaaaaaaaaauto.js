import { File } from "megajs";
import path from "path";
import fetch from 'node-fetch';
import axios from 'axios'
import fg from 'api-dylux'
import { mediafiredl } from '@bochilteam/scraper'
import { youtubeSearch } from '@bochilteam/scraper'

  if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
  if (m.isGroup) return 
  if (m.chat.endsWith('broadcast')) return
  
const handler = async (m, {conn, text, args}) => {
if (!args[0]) return conn.reply('mega link');
       // m.react('✅')
        m.reply(ido.await)
         const file = File.fromURL(args[0]);
        await file.loadAttributes();
        const caption = ido.acaption
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        //if (file.size >= 100000000) return m.reply('لا يتم تحميل ملفك لانه اكبر من 100 ميغا');
        await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true });
      
 };
 

handler.command = "mega";  


export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
