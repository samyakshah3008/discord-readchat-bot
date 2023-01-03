const {
  Client,
  Events,
  GatewayIntentBits,
  CommandInteraction,
  Permissions,
  ChannelType,
  PermissionOverwrites,
  Message,
  GuildMember,
} = require("discord.js");
const { token } = require("./config.json");
// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.login(token);
client.on("messageCreate", async (message) => {
  console.log(message.author);
});
async function createPrivateChannel(serverId, channelName) {
  const guild = await client.guilds.fetch(serverId);

  const channel = await guild.channels.create({ name: channelName });

  // const list = client.guilds.cache.get(serverId);
  // console.log(list.members.guild);

  // Iterate through the collection of GuildMembers from the Guild getting the username property of each member
  // list.members.forEach((member) => console.log(member.user.username));

  // var role = member.guild.roles.cache.find((role) => role.name === "role name");
  // member.roles.add(role);

  channel.permissionOverwrites.edit(serverId, {
    SendMessages: false,
    ViewChannel: false,
  });

  channel.permissionOverwrites.edit("791280772346019840", {
    SendMessages: true,
    ViewChannel: true,
  });
}

createPrivateChannel("1040169817367396373", "final-channel");
