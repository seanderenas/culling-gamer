const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('boobies')
		.setDescription('Replies with BOOBIES!'),
	async execute(interaction) {
		await interaction.reply('BOOBIES!');
	},
};