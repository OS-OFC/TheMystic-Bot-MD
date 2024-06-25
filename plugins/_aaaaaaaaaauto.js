import { File } from "megajs";
import path from "path";
import fetch from 'node-fetch';
import axios from 'axios'
// import fg from 'api-dylux'
import { mediafiredl } from '@bochilteam/scraper'
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import {tiktok} from '@xct007/frieren-scraper';
import {tiktokdl} from '@bochilteam/scraper';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';

const lolkeysapii = 'GataDios'
let enviando = false;

let handler = m => m
handler.before = async (m, { conn, args }) => {

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

       await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }})
          let caption = ido.amenu
   global.aphhoto = ido.photo
          await conn.sendMessage(m.chat, { image: { url: aphhoto }, caption, m});
        }
    //AUTO DOWNLOAD MEGA 
      if (/mega.nz/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
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
        await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
      }
    // AUTO DOWNLOAD MEDIA TWITTER
    if (/https?:\/\/(www\.)?(twitter|x)\.com\/.*\/status/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
        try {
          const res = await TwitterDL(text);
        if (res?.result.type == 'video') {
            const caption = res?.result.caption ? res.result.caption : 'Done';
            for (let i = 0; i < res.result.media.length; i++) {
            await conn.sendMessage(m.chat, {video: {url: res.result.media[i].result[0].url}, caption: caption}, {quoted: m});
            };
            enviando = false;
            return;
        } else if (res?.result.type == 'photo') {
            const caption = res?.result.caption ? res.result.caption : 'Done';
            for (let i = 0; i < res.result.media.length; i++) {
            await conn.sendMessage(m.chat, {image: {url: res.result.media[i].url}, caption: caption}, {quoted: m});
            };
            enviando = false;
            return;
         }
       } catch {
           enviando = false;
           return;
         }
    }

    // AUTO DOWNLOAD MEDIA TIKTOK
    if (/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
      try {
        const dataFn = await conn.getFile(`https://api.cafirexos.com/api/tiktokv2?url=${m.text}`);
        await conn.sendMessage(m.chat, {video: dataFn.data, caption: ''}, {quoted: m});
        await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
      } catch (ee1) {
      try {
        const dataF = await tiktok.v1(m.text);
        // let desc1 =  `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${dataF.nickname || 'Indefinido'}`
        await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: ''}, {quoted: m});
        await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
      } catch (e1) {
        try {
          const tTiktok = await tiktokdlF(m.text);
          // let desc2 = `🔗 *Url:* ${tTiktok.video}`
          await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: ''}, {quoted: m});
          await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
        } catch (e2) {
          try {
            const p = await fg.tiktok(m.text);
            // let te = `*𝚄𝚂𝙴𝚁𝙽𝙰𝙼𝙴:* ${p.author || 'Indefinido'}`
            await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: ''}, {quoted: m});
            await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
          } catch (e3) {
            try {
              const {author: {nickname}, video, description} = await tiktokdl(m.text);
              const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
              // let cap = `*𝙽𝙸𝙲𝙺𝙽𝙰𝙼𝙴:* ${nickname || 'Indefinido'}`
              await conn.sendMessage(m.chat, {video: {url: url}, caption: ''}, {quoted: m});
              await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
            } catch {
              await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
              m.reply('*حدث خطا ما*')
              }
            }
          }
        }
      }
    }

    // AUTO DOWNLOAD MEDIA INSTAGRAM
      if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
        try {
            const img = await instagramDl(m.text);
            for (let i = 0; i < img.length; i++) {
                const bufferInfo = await getBuffer(img[i].download_link);
                    if (bufferInfo.detectedType.mime.startsWith('image/')) {
                        await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
                    } else if (bufferInfo.detectedType.mime.startsWith('video/')) {
                        await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
                    }
            }
            await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
              } catch {   
              try {
                const datTa = await instagram.download(m.text);
                for (const urRRl of datTa) {
                  conn.sendFile(m.chat, urRRl.url, 'error1.mp4', '', m);
                  await new Promise((resolve) => setTimeout(resolve, 10000));
                }
                await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
              } catch {
                  try {
                    const resultss = await instagramGetUrl(m.text).url_list[0];
                    await conn.sendFile(m.chat, resultss, 'error2.mp4', '', m);
                    await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
                  } catch {
                    try {
                      const resultssss = await instagramdl(m.text);
                      for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', '', m);
                    } catch {
                      try {
                        const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapii}&url=${m.text}`);
                        const json = await human.json();
                        const videoig = json.result;
                        await conn.sendFile(m.chat, videoig, 'error3.mp4', '', m);
                        await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
                      } catch {
                        await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
                        m.reply('*حدث خطا ما*')
                      }
                    }
                  }
                }
              }
        };
    // AUTO DOWNLOAD FROM THREADS
    /*if (/https?:\/\/(www\.)?threads\.net\//i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
      m.reply(ido.await)
      let res = await fetch(`${api}/download/threads?url=${m.text}`)
        let api_response = await res.json();
        const mediaArray = api_response.data
        const mediaData = mediaArray.video_versions[0];
        const mediaURL = mediaData.url
        let cap = ido.acaption
       conn.sendFile(m.chat, mediaURL, 'threads.mp4', cap, m);
};*/

     // AUTO DOWNLOAD FROM SPOTIFY
  
    // AUTO DOWNLOAD FROM FACEBOOK
    if (/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) {
      await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
      
  try {
    const d2ata = await facebook.v1(m.text);
    let r2es = '';
    if (d2ata.urls && d2ata.urls.length > 0) {
      r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
    }
    await conn.sendFile(m.chat, r2es, 'error1.mp4', `_*${ido.acaption}*_\n\n`, m);
    await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
  } catch (err1) {
    try {
      const req = await igeh(m.text);
      await conn.sendMessage(m.chat, {video: {url: req.url_list}}, m);
      await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
    } catch (err1_2) {
      try {
        const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapii}&url=${m.text}`);
        const Jjson = await Rres.json();
        let VIDEO = Jjson.result[0];
        if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
        await conn.sendFile(m.chat, VIDEO, 'error2.mp4', `_*${ido.acaption}*_`, m);
        await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
      } catch (err2) {
        try {
          const ress = await fg.fbdl(m.text);
          const urll = await ress.data[0].url;
          await conn.sendFile(m.chat, urll, 'error3.mp4', `_*${ido.acaption}*_`, m);
          await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
        } catch (err3) {
          try {
            const res = await fbDownloader(m.text);
            for (const result of res.download) {
              const ur = result.url;
              await conn.sendFile(m.chat, ur, 'error4.mp4', `_*${ido.acaption}*_\n\n`, m);
              await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
            }
          } catch (err4) {
            try {
              const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${m.text}`);
              const json = await res3.json();
              const url3 = await json.video;
              await conn.sendFile(m.chat, url3, 'error5.mp4', `_*${ido.acaption}*_`, m);
              await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
            } catch (err5) {
              try {
                const {result} = await facebookdl(m.text).catch(async (_) => await facebookdlv2(m.text)).catch(async (_) => await savefrom(m.text));
                for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '', m);
                await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }});
              } catch (err6) {
                await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
                m.reply('*حدث خطا ما*')
              }
            }
          }
        }
      }
    }
  }
}

        // AUTO DOWNLOAD MEDIA YOUTUBE
    if (/https?:\/\/((youtu|youtube)\.(be|com)|(www\.|web\.|m\.)?(youtu|youtube)\.(com|be))/i.test(m.text)) {
       await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }});
       if (!m.text) return
        const youtubeLink = m.text;
       try {
        const formats = await bestFormat(youtubeLink, 'video');
        const buff = await getBuffer(formats.url);
        const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
        const ttl_1 = `${yt_1?.title ? yt_1.title : 'Tu_video_descargado'}`;
        const fileSizeInBytes = buff.byteLength;
        const fileSizeInKB = fileSizeInBytes / 1024;
        const fileSizeInMB = fileSizeInKB / 1024;
        const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
       if (fileSizeInMB > 100) {
        await conn.sendMessage(m.chat, {document: buff, caption: `${tradutor.texto6[0]} ${ttl_1}\n${tradutor.texto6[1]} ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});

       } else {
        await conn.sendMessage(m.chat, {video: buff, caption: `${tradutor.texto7[0]} ${ttl_1}\n${tradutor.texto7[1]} ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
  
       }
     } catch (ee) {
        console.log(ee)
      try {
        const qu = args[1] || '360';
        const q = qu + 'p';
        const v = youtubeLink;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = yt.video[q].download();
        const ttl = yt.title;
        const size = yt.video[q].fileSizeH;
        await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: ``, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});

      } catch (ee2) {
        console.log(ee2)
        try {
          const mediaa = await ytMp4(youtubeLink);
          await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: ``, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});

        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapii}&url=${youtubeLink}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: ``, thumbnail: await fetch(n4)}, {quoted: m});

          } catch {
            await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
            m.reply('*حدث خطا ما*')
          }
        }
      }
        }};

    // AUTO DOWNLOAD FROM GOOGLE DRIVE
    if (/https?:\/\/drive\.google\.com/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
        await m.reply(ido.await)
        try {
          let id = m.text.match(/https?:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i)[1];
          let url = `https://drive.google.com/uc?export=download&id=${id}`;
            await conn.sendFile(m.chat, url, '', ido.acaption , m);
        } catch {
          await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
          m.reply('*حدث خطا ما*')
        }
        }

        // AUTO DOWNLOAD MEDIA FIRE
    if (/https?:\/\/(www\.)?mediafire\.com/i.test(m.text)) {
        await await conn.sendMessage(m.chat, {
    react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key
    }})
        try {
    let res = await mediafiredl(m.text.match(/https?:\/\/(www\.)?mediafire\.com\/.*/i)[0].split(/\n| /i)[0]).catch(_ => null) 
        let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
 if (filesize >= 150000) return m.reply('لا يتم تحميل ملفك لانه اكبر من 150 ميغا')
      m.reply(ido.await)
        let cap = ido.acaption
     await conn.sendFile(m.chat, url, filename, cap, m )
     await conn.sendMessage(m.chat, {
    react: {
        text: "✅", // use an empty string to remove the reaction
        key: m.key
    }})
    } catch {
      await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
      m.reply('*حدث خطا ما*')
    }
     }
     } catch {
  await conn.sendMessage(m.chat, {
    react: {
        text: "❌", // use an empty string to remove the reaction
        key: m.key
    }})
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

// Twitter
const _twitterapi = (id) => `https://info.tweeload.site/status/${id}.json`;
const getAuthorization = async () => {
    const { data } = await axios.default.get("https://pastebin.com/raw/SnCfd4ru");
    return data;
};
const TwitterDL = async (url) => {
  return new Promise(async (resolve, reject) => {
    const id = url.match(/\/([\d]+)/);
    if (!id)
      return resolve({
        status: "error",
        message:
          tradutor.texto4,
      });
      const response = await axios.default(_twitterapi(id[1]), {
        method: "GET",
        headers: {
          Authorization: await getAuthorization(),
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
        },
      });

      if (response.data.code !== 200) {
        return resolve({
          status: "error",
          message: tradutor.texto5,
        });
      }

      const author = {
        id: response.data.tweet.author.id,
        name: response.data.tweet.author.name,
        username: response.data.tweet.author.screen_name,
        avatar_url: response.data.tweet.author.avatar_url,
        banner_url: response.data.tweet.author.banner_url,
      };

      let media = [];
      let type;

      if (response.data.tweet?.media?.videos) {
        type = "video";
        response.data.tweet.media.videos.forEach((v) => {
          const resultVideo = [];
          v.video_urls.forEach((z) => {
            resultVideo.push({
              bitrate: z.bitrate,
              content_type: z.content_type,
              resolution: z.url.match(/([\d ]{2,5}[x][\d ]{2,5})/)[0],
              url: z.url,
            });
          });
          if (resultVideo.length !== 0) {
            media.push({
              type: v.type,
              duration: v.duration,
              thumbnail_url: v.thumbnail_url,
              result: v.type === "video" ? resultVideo : v.url,
            });
          }
        });
      } else {
        type = "photo";
        response.data.tweet.media.photos.forEach((v) => {
          media.push(v);
        });
      }

      resolve({
        status: "success",
        result: {
          id: response.data.tweet.id,
          caption: response.data.tweet.text,
          created_at: response.data.tweet.created_at,
          created_timestamp: response.data.tweet.created_timestamp,
          replies: response.data.tweet.replies,
          retweets: response.data.tweet.retweets,
          likes: response.data.tweet.likes,
          url: response.data.tweet.url,
          possibly_sensitive: response.data.tweet.possibly_sensitive,
          author,
          type,
          media: media.length !== 0 ? media : null,
        },
      });
  });
};

// YOUTUBE
function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
