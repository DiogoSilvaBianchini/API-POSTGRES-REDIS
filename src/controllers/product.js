const Service = require("../services/Services")
const service = new Service("products")

class Products{
    static async createProduct(req,res,next){
        try {
            const {name, price, describe, img} = req.body
            await service.create({name, price, describe, img})
            return res.status(200).json({msg: "Produto criado com sucesso.", results: {title, price, describe, img}, status: 200})
        } catch (error) {
            next(error)
        }
    }

    static async findAllProducts(req,res,next){
        try {
            const searchProducts = await service.findAll()
            return res.status(200).json({msg: "Todos os produtos.", results: searchProducts, status: 200})
        } catch (error) {
            next(error)
        }
    }

    static async updateProduct(req,res,next){
        try {
            const {id} = req.params
            const {name, price, describe, img} = req.body
            let body = {}
            Object.entries({name, price, describe, img}).map((element => {
                if(element[1]){
                    body[element[0]] = element[1]
                }
            }))

            await service.updateById(body, id)

            return res.status(200).json({msg: "Item atualizado com sucesso", results: true, status:200})

        } catch (error) {
            next(error) 
        }
    }

    static async removeProduct(req,res,next){
        try {
            const {id} = req.params
            await service.removeById(id)
            return res.status(200).json({msg: "Item removido com sucesso", results: true, status: 200})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Products