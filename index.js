const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf("5936336198:AAFQ2RS5auQ0p6aSmM2qlRTaxmdRmsi_Jr8");
bot.start((ctx) => ctx.reply('Завдяки цьому боту ви можете перевірити чи працює зараз наукова групу зуну',		Markup.keyboard([
    ["🔍 Перевірити чи працює наукова група"], // Row1 with 2 buttons

])
    .oneTime()
    .resize(),));
bot.hears("🔍 Перевірити чи працює наукова група", ctx =>{
    ctx.reply("Так, наукова група наполегливо працює над проектом💪")
})
bot.on("message", ctx=>{
    ctx.reply("Невідома команда👁")
})
bot.launch();
