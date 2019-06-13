module.exports = function (bot) {
    bot.addCommand({
        name: "help",
        args: [],
        description: "Lists commands",
        shortcuts: [
            "help"
        ],
        ignore: false,
        permissions: ["all"],
        func: (msg) => {
            let exportText = "";
            Object.keys(bot.commands).forEach(e => {
                e = bot.getCommand(e);
                if (e && !e.ignore) {
                    exportText += `\`${e.name}\` - **${e.args.toString()}** - ${e.description}\n`
                }
            });
            msg.roomContext.send(exportText);
        }
    })
};
/**
 * Lists commands
 *
 * @return {String} - List of commands
 */
function help(query) {}