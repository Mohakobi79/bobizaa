import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   //let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    //if (!/video|audio/.test(mime)) throw `✳️ Reply to the audio you want to convert to voice memo with :\n *${usedPrefix + command}*`
let loadd = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '> *_☯️ تم التحويل ✅ بنجاح ..._*'
 ]
for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit:  })}
    let media = await q.download?.()
    if (!media) throw '❎ Failed to download media'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Error converting'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['to', 'tovn'] 

export default handler