module.exports = function (bot) {
    bot.addCommand({
        name: "joke",
        args: [],
        description: "Sends a joke",
        shortcuts: [
            "joke"
        ],
        examples: ["|| joke"],
        ignore: false,
        permissions: ["all"],
        func: (msg) => {
            if (Math.random() <= 0.1 && msg.args !== "bypass") {
                msg.roomContext.send(`${msg.getVariableUsername()}'s code 😜`);
                return;
            }
            bot.json_request('https://official-joke-api.appspot.com/jokes/programming/random', (err, res, body) => {
                if(!body){
                    msg.replyDirect("Error getting Joke");
                    return;
                }
                body = body[0];
                msg.roomContext.send(body.setup);
                setTimeout(() => {
                    msg.roomContext.send(body.punchline)
                }, 2500);
            });
        }
    });
};
/**
 * Sends a joke
 *
 * @return {String} - A joke from the `https://official-joke-api.appspot.com/jokes/programming/random`
 */
function joke() {}
