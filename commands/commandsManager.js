const { bot } = require('../root/bot.js')

async function getMyCommandsList() {
    let response = await bot.api.getMyCommands()
    let myCommandsList = JSON.parse(JSON.stringify(response))
}
async function deleteMyCommandsList() {
    let response = await bot.api.deleteMyCommands()
    let state = JSON.parse(JSON.stringify(response))
}
async function setMyCommandsList(commands) {
    let response = await bot.api.setMyCommands(commands)
    let myCommands = JSON.parse(JSON.stringify(response))
}

module.exports.getMyCommandsList = getMyCommandsList
module.exports.deleteMyCommandsList = deleteMyCommandsList
module.exports.setMyCommandsList = setMyCommandsList
