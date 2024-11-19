const { createClient } = require("redis")

const client = createClient()

const redisConn = async () => {
    client.connect().then(() => {
        console.log("Redis conectado")
    })
    client.ping()
}

module.exports = {redisConn, client}