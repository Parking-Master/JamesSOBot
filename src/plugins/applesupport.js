const {Message} = require('../events/Message.js');

module.exports = function (bot) {
    bot.addCommand({
        name: "Apple Search",
        args: [
            "query"
        ],
        description: "Searches for query on Apple Support",
        shortcuts: [
            "aps"
        ],
        examples: ["|| aps forgot Apple ID password"],
        ignore: false,
        permissions: ["all"],
        func: (msg) => {
            if (msg.args.length < 1) {
                msg.roomContext.send("**Missing args**");
                return;
            }
            bot.google_search(msg.args.join(" "), "support.apple.com", null, /^https:\/\/support\.apple\.com\/.*$/,
                (data) => {
                    if (data) {
                        msg.replyDirect(Message.link(data.title, data.url));
                    } else {
                        msg.replyDirect('An error occurred with the request.');
                    }
                });
        },
    })
};
/**
 * Searches for query on Apple Support
 *
 * @param {String} query
 * @return {String} - An Apple Support article based on your `query`
 */
function aps(query) {}
