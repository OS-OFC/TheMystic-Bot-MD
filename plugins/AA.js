let handler = async (m, { conn, isROwner, args }) => {
    if (args[0] === "all") {
        if (!isROwner) throw 'not allowed'
    for (let chatId in global.db.data.chats) {
        let dtaMM = global.db.data.chats[chatId].dtaM;
        if (dtaMM) {
            await conn.chatModify({delete: true,lastMessages: [dtaMM]}, chatId)
            delete global.db.data.chats[chatId].dtaM;
        }
    }
        m.reply("*Cleared all*")
        return
    } else {
        await conn.chatModify({delete: true, lastMessages: [{ key: m.key,messageTimestamp: m.messageTimestamp }]}, m.chat)
        conn.sendMessage(m.chat, {text: '```Cleared```'})
    }
};

handler.before = async (m) => {
  if (m.text === "" || m.fromMe) return
   global.db.data.chats[m.chat].dtaM = { key: m.key, messageTimestamp: m.messageTimestamp }
};

handler.command = /^((clear|delete)chat)|clear$/i;

export default handler
