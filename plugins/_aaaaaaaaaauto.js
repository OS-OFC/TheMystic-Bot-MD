import { File } from "megajs";
import path from "path";
import fetch from 'node-fetch';
import axios from 'axios'
import fg from 'api-dylux'
import { mediafiredl } from '@bochilteam/scraper'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = m => m
handler.before = async (m, { conn }) => {

  if (m.isBaileys || (m.isBaileys && m.fromMe && m.isGroup)) return
  if (m.isGroup) return 
  if (m.chat.endsWith('broadcast')) return

  try {
  // console.log(conn)
   let ngn = '/OS-OFC'
    let gng = '/TERMOS-WABOT/main/2/4/2/728/223/1333/12.js'
      let ido = await (await fetch('https://raw.githubusercontent.com' + ngn + gng)).json()
    let api = ido.apidi
    
    // MENU
        if (/menu/i.test(m.text)) {

       m.react('✅')
          let caption = ido.amenu
   global.aphhoto = ido.photo
          await conn.sendMessage(m.chat, { image: { url: aphhoto }, caption, m});
        }
    //AUTO DOWNLOAD MEGA 
      if (/mega.nz/i.test(m.text)) {
        m.react('✅')
        m.reply(ido.await)
         const file = File.fromURL(m.text);
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
        if (file.size >= 100000000) return m.reply('لا يتم تحميل ملفك لانه اكبر من 100 ميغا');
        await conn.sendFile(m.chat, data, file.name, caption, m, null, { mimetype, asDocument: true });
      }
    // AUTO DOWNLOAD MEDIA TWITTER
    if (/https?:\/\/(www\.)?(twitter|x)\.com\/.*\/status/i.test(m.text)) {
      m.react('✅');
      m.reply(ido.await)
      let res = await fetch(`${api}/download/twitter?url=${m.text}`)
        let api_response = await res.json();
        const mediaArray = api_response.data
        const mediaURL = mediaArray.HD
        let cap = ido.acaption
       conn.sendFile(m.chat, mediaURL, 'x-twitter.mp4', cap, m);
    }

    // AUTO DOWNLOAD MEDIA TIKTOK
    if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(m.text)) {
      m.react('✅');
      m.reply(ido.await)
      let res = await fetch(`${api}/download/tiktok2?url=${m.text}`)
        let api_response = await res.json();
        const mediaArray = api_response.data
        const mediaURL = mediaArray.nowm
        let cap = ido.acaption
       conn.sendFile(m.chat, mediaURL, 'tiktok.mp4', cap, m)
    }

    // AUTO DOWNLOAD MEDIA INSTAGRAM
      if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) {
   m.react('✅');
  m.reply(ido.await)
let res = await fetch(`${api}/download/instagram2?url=${m.text}`)
let api_response = await res.json();
const mediaArray = api_response.data[0]
const mediaURL = mediaArray.download_link
let cap = ido.acaption
 await conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
        };
    // AUTO DOWNLOAD FROM THREADS
    if (/https?:\/\/(www\.)?threads\.net\//i.test(m.text)) {
      m.react('✅');
      m.reply(ido.await)
      let res = await fetch(`${api}/download/threads?url=${m.text}`)
        let api_response = await res.json();
        const mediaArray = api_response.data
        const mediaData = mediaArray.video_versions[0];
        const mediaURL = mediaData.url
        let cap = ido.acaption
       conn.sendFile(m.chat, mediaURL, 'threads.mp4', cap, m);
};
     // AUTO DOWNLOAD FROM SPOTIFY
  
    // AUTO DOWNLOAD FROM FACEBOOK
if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) {
      await m.react('✅')
       m.reply(ido.await);
  let res = await fetch(`${api}/download/fb?url=${m.text}`)
    let api_response = await res.json();
    const mediaArray = api_response.data
    const mediaURL = mediaArray.video_hd
    let cap = ido.acaption
   conn.sendFile(m.chat, mediaURL, 'fb.mp4', cap, m);
} 
        // AUTO DOWNLOAD MEDIA YOUTUBE
    if (/https?:\/\/((youtu|youtube)\.(be|com)|(www\.|web\.|m\.)?(youtu|youtube)\.(com|be))/i.test(m.text)) {
       m.react('✅');
      m.reply(ido.await)
    let res = await fetch(`${api}/download/ytmp4?url=${m.text}`)
    let api_response = await res.json();
    const mediaArray = api_response.data
    const mediaURL = mediaArray.vid_360p
    let cap = ido.acaption
            conn.sendFile(m.chat, mediaURL, 'yt.mp4', cap, m);
            };
    // AUTO DOWNLOAD FROM GOOGLE DRIVE
    if (/https?:\/\/drive\.google\.com/i.test(m.text)) {
      await m.react('✅')
        await m.reply(ido.await)
          let id = m.text.match(/https?:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i)[1];
          let url = `https://drive.google.com/uc?export=download&id=${id}`;
            await conn.sendFile(m.chat, url, '', ido.acaption , m);
        }

        // AUTO DOWNLOAD MEDIA FIRE
    if (/https?:\/\/(www\.)?mediafire\.com/i.test(m.text)) {
     m.react('✅')
    let res = await mediafiredl(m.text.match(/https?:\/\/(www\.)?mediafire\.com\/.*/i)[0].split(/\n| /i)[0]).catch(_ => null) 
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
 if (filesize >= 150000) return m.reply('لا يتم تحميل ملفك لانه اكبر من 150 ميغا')
      m.reply(ido.await)
        let cap = ido.acaption
     await conn.sendFile(m.chat, url, filename, cap, m )
    }
} catch {
  m.react('❌')
  m.reply('*حدث خطا ما*')
}
}


export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
