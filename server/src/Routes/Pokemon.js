const { Router } = require("express")
const Pokemon = require("../Database/Pokemon.json")

const Ruta = Router()
Ruta.get("/Pokemon", (req, res) => {
    res.json(Pokemon)
})
module.exports = Ruta;