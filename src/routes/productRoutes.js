const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/product")

router.get("/", (req,res) => {
    return res.status(200).json({msg: "Servidor rodando.", status: 200})
})

router.get("/products", ProductController.findAllProducts)
router.post("/products", express.json(), ProductController.createProduct)
router.put("/products/:id", express.json(), ProductController.updateProduct)
router.delete("/products/:id", express.json(), ProductController.removeProduct)

module.exports = router