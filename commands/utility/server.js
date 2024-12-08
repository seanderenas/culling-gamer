const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		let msg = `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nUsers:\n`;
		interaction.guild.members.cache.forEach(member => {
			msg += ` ~ ${member.user.username}\n`;
		});
		await interaction.reply(msg);
	},
};