const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    return res.status(200).json({msg: "Servidor rodando.", status: 200})
})

module.exports = router