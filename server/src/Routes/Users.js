const { Router } = require("express")
const Users = require("../Database/Users.json")

const Ruta = Router()
Ruta.get("/Users", (req, res) => {
    res.json(Users)
})
module.exports = Ruta;