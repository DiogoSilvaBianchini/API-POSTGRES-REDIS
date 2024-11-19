require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const {sequelize} = require("./src/database/models")

const app = express()
const PORT = process.env.PORT || 8082
app.use(morgan("dev"))

sequelize.sync({after: true}).then(() => {
    console.log("Banco de dados conectado com sucesso!")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))