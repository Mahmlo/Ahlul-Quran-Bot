const { SlashCommandBuilder } = require('discord.js');
const { askMuslimsId } = require('../../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask-anonymous')
    .setDescription('Use this to ask a question while staying anonymous.')
    .addStringOption(option =>
      option.setName('question')
        .setDescription('The question to ask.')
        .setRequired(true)),
  
  async execute(interaction) {
    const question = interaction.options.getString('question');
    
    await interaction.reply(`<@&${askMuslimsId}> An anonymous person asked:\n>>>${question}`);
  },
};
