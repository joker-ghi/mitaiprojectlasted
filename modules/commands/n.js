module.exports.config = {
	name: "*",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
  const timeStart = Date.now();
  /*const res = await axios.get(`https://tan.kizz-kinncuti.repl.co/images/cosplay`);
var tpk = res.data.url;*/
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
  const dateNow = Date.now();
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? "Tốt ✔️":
  xuly > 10 && xuly < 100 ? "Ổn định 📊" : "deplay ";
var tpk = [
"https://i.imgur.com/bDgHtLv.jpg", "https://i.imgur.com/e8pPmPv.jpg",
"https://i.imgur.com/FZNZrmg.jpg",
"https://i.imgur.com/8qk4gq0.jpg",
"https://i.imgur.com/0dM5C3z.jpg",
"https://i.imgur.com/BpPqoff.jpg",
"https://i.imgur.com/Q2pMP3i.jpg",
"https://i.imgur.com/p3LodXX.jpg",
"https://i.imgur.com/vCKIb0O.jpg",
"https://i.imgur.com/JkIl50k.jpg",
"https://i.imgur.com/T20aoHN.jpg",
"https://i.imgur.com/3UGXnIo.jpg",
"https://i.imgur.com/gryzOen.jpg",
"https://i.imgur.com/NP0sdUc.jpg",
"https://i.imgur.com/q0rKNsr.jpg",
"https://i.imgur.com/0CQobFI.jpg",
"https://i.imgur.com/X24SK2G.jpg",
"https://i.imgur.com/eSAueQz.jpg",
"https://i.imgur.com/oRVOR0W.jpg",
"https://i.imgur.com/EkHWUpa.jpg",
"https://i.imgur.com/5bIODpC.jpg",
"https://i.imgur.com/vm0Sq3F.jpg",
"https://i.imgur.com/qKVZs8U.jpg",
"https://i.imgur.com/v3Zyyob.jpg",
"https://i.imgur.com/hNbsZ43.jpg",
"https://i.imgur.com/kVQx8Za.jpg",
"https://i.imgur.com/KO6rtui.jpg",
"https://i.imgur.com/EHSF0cM.jpg",
"https://i.imgur.com/SkouUM6.jpg",
"https://i.imgur.com/gnIHYP4.jpg",
"https://i.imgur.com/NJPvfEg.jpg",
"https://i.imgur.com/Q0NiO3V.jpg",
"https://i.imgur.com/Js4PDKC.jpg",
"https://i.imgur.com/KJuO7fI.jpg",
"https://i.imgur.com/jdoPS0o.jpg",
"https://i.imgur.com/IWm8yiW.jpg",
"https://i.imgur.com/6pchJmm.jpg",
"https://i.imgur.com/ptmUUKZ.jpg",
"https://i.imgur.com/5hWZts5.jpg",
"https://i.imgur.com/2cNXMs8.jpg",
"https://i.imgur.com/aCa5OMy.jpg",
"https://i.imgur.com/bkAhQ9N.jpg",
"https://i.imgur.com/qNCbsbB.jpg",
"https://i.imgur.com/GtsceRX.jpg",
"https://i.imgur.com/knpwcJz.jpg",
"https://i.imgur.com/4tYwzr1.jpg",
"https://i.imgur.com/1oy8l4D.jpg",
"https://i.imgur.com/l1VPp1w.jpg",
"https://i.imgur.com/JiWVLKb.jpg",
"https://i.imgur.com/DoCnERH.jpg",
"https://i.imgur.com/HlbIwkQ.jpg",
"https://i.imgur.com/MfMSEU2.jpg",
"https://i.imgur.com/3nKvsP4.jpg",
"https://i.imgur.com/IfeE7Sv.jpg",
"https://i.imgur.com/UVc7zzE.jpg",
"https://i.imgur.com/PijhNE3.jpg",
"https://i.imgur.com/xAbHS9o.jpg",
"https://i.imgur.com/JFA1uj3.jpg",
"https://i.imgur.com/eWDRrWW.jpg",
"https://i.imgur.com/pJSbboG.jpg",
"https://i.imgur.com/puvzf9A.jpg",
"https://i.imgur.com/kW0eOV7.jpg",
"https://i.imgur.com/BFvIw8e.jpg",
"https://i.imgur.com/a9mB7u1.jpg",
"https://i.imgur.com/0wWCX3A.jpg",
"https://i.imgur.com/wmuIp2v.jpg",
"https://i.imgur.com/HsAErrS.jpg",
"https://i.imgur.com/WbF0OlG.jpg",
"https://i.imgur.com/gwFrHEI.jpg",
"https://i.imgur.com/otFFsWa.jpg",
"https://i.imgur.com/Y5kMtPx.jpg",
"https://i.imgur.com/SYZG96w.jpg",
"https://i.imgur.com/UyZTIsY.jpg",
"https://i.imgur.com/ElhzeLV.jpg",
"https://i.imgur.com/oqmN63X.jpg",
"https://i.imgur.com/MOdMOK0.jpg",
"https://i.imgur.com/FvfHdOA.jpg",
"https://i.imgur.com/cZlLEEu.jpg",
"https://i.imgur.com/D2sPVkC.jpg",
"https://i.imgur.com/FNRRTy7.jpg",
"https://i.imgur.com/GDEBTl2.jpg",
"https://i.imgur.com/dOZwgSd.jpg",
"https://i.imgur.com/Sh0kRwG.jpg",
"https://i.imgur.com/M0AYNug.jpg",
"https://i.imgur.com/vmU9UAM.jpg",
"https://i.imgur.com/QIcueNQ.jpg",
"https://i.imgur.com/xAU0nhF.jpg",
"https://i.imgur.com/YrfpgRK.jpg",
"https://i.imgur.com/gZzXhlI.jpg",
"https://i.imgur.com/m6pQwFY.jpg",
"https://i.imgur.com/g4VArWU.jpg",
"https://i.imgur.com/5j5OboX.jpg",
"https://i.imgur.com/DrjPCxZ.jpg",
"https://i.imgur.com/k5nG1hR.jpg",
"https://i.imgur.com/tpqGDGf.jpg",
"https://i.imgur.com/Q8VLAUw.jpg",
"https://i.imgur.com/lyPc2A8.jpg",
"https://i.imgur.com/ATOUNQL.jpg",
"https://i.imgur.com/iGzMHrV.png",
"https://i.imgur.com/jppLuim.jpg",
"https://i.imgur.com/GORiYUe.jpg",
];
var so = [
  "2","3","4"
];
const tao = so[Math.floor(Math.random()*so.length)];
  let image = [];
 for(let i = 0; i < tao; i++) {
   const a = tpk[Math.floor(Math.random()*tpk.length)];
    const stream = (await axios.get(a, {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const msg = {
    body: `💓 ==== [ 𝗭𝗜𝗢𝗘𝗦 ] ==== 💓\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${timeNow}\n⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${hours}:${minutes}:${seconds}\n⚙️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${trinhtrang}\n🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${xuly} 𝗴𝗶𝗮̂𝘆\n⏳ Đ𝗼̣̂ 𝘁𝗿𝗲̂̃: ${Date.now() - timeStart}ms
━━━━━━━━━━━━━━━━━━━━━━
👍 𝗫𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 𝗱𝘂̀𝗻𝗴
🥰 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗮𝗱𝗺𝗶𝗻
😆 𝗖𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁 𝗰𝗼̛ 𝗯𝗮̉𝗻
💵 𝗖𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗰𝗮́𝗰𝗵 𝘁𝗵𝘂𝗲̂ 𝗯𝗼𝘁
😍 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗳𝗶𝗹𝗲 𝗯𝗼𝘁
━━━━━━━━━━━━━━━━━━━━━━
👑 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘃𝗼̛́𝗶 𝗶𝗰𝗼𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`,
    attachment: image
};
    api.sendMessage(msg,event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID,reaction,messageID, userID } = event;
if (reaction == '👍') {
  api.unsendMessage(handleReaction.messageID);
var msg = `📗 ==== 𝗟𝗜𝗦𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ====📗 
━━━━━━━━━━━━━━━━━━━━━
𝟭. !𝗵𝗲𝗹𝗽 𝗮𝗹𝗹 𝗵𝗼𝗮̣̆𝗰 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵
𝟮. 𝗱𝘂̀𝗻𝗴 !𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
𝟯. 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
𝟰. 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
𝟱. !𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 
𝟲. !𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
𝟳. !𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
𝟴. !𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
𝟵. !𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
𝟭𝟬. !𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
𝟭𝟭. !𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
𝟭𝟮. !𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
𝟭𝟯. !𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
𝟭𝟰. !𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
𝟭𝟱. !𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
𝟭𝟲. !𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
𝟭𝟳. 𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿

🌸 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻  𝗗𝘂𝗻𝗴 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴
`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apivip.nvt20011.repl.co/image/loli')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID);
}
else if (reaction == '🥰') {
  api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`👑 === 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗔𝗗𝗠𝗜𝗡 ===👑
━━━━━━━━━━━━━━━━━━━━
👤 𝗧𝗲̂𝗻: Doan Thanh Tuan
🔰 𝗕𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵:  𝗞mZioes
🦁 𝗖𝘂𝗻𝗴: 𝗕𝗮̉𝗼 𝗯𝗶̀𝗻𝗵
👶 𝗡𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: 13/12/2009
🗾 𝗡𝗼̛𝗶 𝗼̛̉: Hà Nội 
☎️ 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: https://www.facebook.com/profile.php?id=tuandzas

🌸 𝗣𝗵𝗮́𝗶 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗶́𝗻𝗵`, event.threadID, event.messageID);
    }
  else if (reaction == '😆') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`❤️ =『 𝗖𝗔́𝗖𝗛 𝗗𝗨̀𝗡𝗚 𝗖𝗢̛ 𝗕𝗔̉𝗡 』=❤️

𝗛𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗼̛ 𝗯𝗮̉𝗻!

😻 𝗡𝗵𝗮̣̂𝗽 !𝗺𝗲𝗻𝘂 𝗵𝗼𝗮̣̆𝗰 !𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝘁𝗿𝗲̂𝗻 𝗕𝗼𝘁
🎊 𝗡𝗵𝗮̣̂𝗽 !𝗿𝘂𝗹𝗲 đ𝗲̂̉ 𝘅𝗲𝗺 𝗹𝘂𝗮̣̂𝘁 𝗻𝗵𝗼́𝗺
𝗻𝗲̂́𝘂 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗵𝗮̃𝘆 𝘁𝗵𝗲̂𝗺 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 
🍏 !𝗿𝘂𝗹𝗲 𝗮𝗱𝗱 + [𝗟𝘂𝗮̣̂𝘁 𝗡𝗵𝗼́𝗺] đ𝗲̂̉ 𝘁𝗵𝗲̂𝗺 𝗹𝘂𝗮̣̂𝘁
🌸 !𝗗𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 !𝗰𝗮𝗹𝗹𝗮𝗱 + [𝗟𝗼̛̀𝗶 𝗡𝗵𝗮̆́𝗻] 
đ𝗲̂̉ 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝗹𝗼̛̀𝗶 đ𝗲̂́𝗻 𝗮𝗱𝗺𝗶𝗻

𝗖𝗼́ 𝘁𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗵𝗮𝘆 𝘃𝗮̂́𝗻 đ𝗲̂̀ 𝗴𝗶̀ 𝘁𝗵𝗶̀ 𝗹𝗶𝗲̂𝗻 
☎️ 𝗵𝗲̣̂ 𝗾𝘂𝗮 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸:
https://www.facebook.com/profile.php?id=tuandzas `, event.threadID, event.messageID);
  }
else if (reaction == '💵') {
  api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`🔔 =====『 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 』=====🔔
━━━━━━━━━━━━━━━━━━━━━
💵 𝗖𝗮́𝗰𝗵 𝘁𝗵𝘂̛́𝗰 𝘁𝗵𝘂𝗲̂ 𝗯𝗼𝘁
🌸 𝗧𝗵𝘂𝗲̂ 𝗯𝗼𝘁 50k/1tháng
👑 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗵𝘂𝗲̂ đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗹𝗮̀𝗺 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁
☎️ 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂: https://www.facebook.com/tony.derby.773
`, event.threadID, event.messageID);
}
  else if (reaction == '😍') {
    api.unsendMessage(handleReaction.messageID);
    return api.sendMessage(`
🎊 Đ𝗮̂𝘆 𝗹𝗮̀ 𝗠𝗶𝗿𝗮𝗶 𝗯𝗼𝘁 𝗭𝗜𝗢𝗘𝗦💍𝗧𝘂𝗮𝗻 đ𝘂̛𝗼̛̣𝗰 𝗮𝗱𝗺𝗶𝗻 𝗹𝗮̂́𝘆 𝘁𝘂̛̀ 𝘀𝗿𝗰 𝗱 - 𝗷𝘂𝗸𝗲 𝗰𝘂̉𝗮 𝗱𝗶𝗲̣̂𝗻 𝘃𝗲̂̀ 𝘃𝗮̀ 𝗺𝗼𝗱 𝗹𝗮̣𝗶 đ𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗽𝗵𝗮́𝘁 𝘁𝗿𝗶𝗲̂̉𝗻
𝗠𝗼̣𝗶 𝘁𝗵𝗮̆́𝗰 𝗺𝗮̆́𝗰 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻
🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/tony.derby.773
`, event.threadID, event.messageID);
  }
    };
