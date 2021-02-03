import { PermissionType, PluginFunction } from "@chatbot/bot";


export const choose: PluginFunction = (bot) => {
  bot.addCommand({
    name: "choose",
    description: "Chooses an option from a space delimited string of options. Strips 'or's .",
    examples: ["|| choose heads tails", "|| choose 1 2 3 or 4"],
    shortcuts: ["choose", "pick", "choice"],
    permissions: [PermissionType.ALL],
    args: ["...options"],
    ignore: false,
    cb: (message, client) => {
      message.args = message.args.filter(arg => arg !== "or");
      if (message.args.length === 0) {
        client.send("I can't read your mind. Please provide an arg or two.", message);
      }
      client.send(message.args[Math.floor(Math.random() * message.args.length)], message);
    }
  });
};
