const {client} = require("../database/config/redis")

const updateCache = async (tag, service) => {
    const findAllProducts = await service.findAll()
    await client.set(tag, JSON.stringify(findAllProducts))
}

module.exports = {
    updateCache
}