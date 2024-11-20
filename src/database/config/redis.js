const { createClient } = require("redis")

const client = createClient()

const redisConn = async () => {
    await client.on('error', (err) => {
        console.log(err)
    }).connect().then(() => {
        console.log("Redis conectado")
    })
}

module.exports = {redisConn, client}