module.exports = {
  eurix: {
    name: "owner",
    description: "Shows the owner of the bot.",
    author: "Eugene Aguilar",
    category: "system",
  },
  execute: async function ({ bot, chatId }) {
    try {
      bot.sendMessage(chatId, `My owner is ${global.config.owner}\nFrom ${global.config.country}\nAge: ${global.config.age}\nGender: ${global.config.gender}`);
    } catch (error) {
      console.error(error);
    }
  }
};