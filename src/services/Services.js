const sequelize = require("../database/models/index")

class Service{
    constructor(model){
        this.model = model
    }

    async create(body){
        try {
            await sequelize[this.model].create(body)
        } catch (error) {
            throw new Error(error)
        }
    }

    async findAll(options){
        const search = await sequelize[this.model].findAll()
        return search
    }

    async findById(id){
        const search = await sequelize[this.model].findByPk(id)
        return search
    }

    async findOne(options){
        const search = await sequelize[this.model].findOne(options)
        return search
    }

    async updateById(body, id){
        await sequelize[this.model].update(body, {where: {id: Number(id)}})
    }

    async removeById(id){
        await sequelize[this.model].destroy({where: {id: Number(id)}})
    }
}

module.exports = Service