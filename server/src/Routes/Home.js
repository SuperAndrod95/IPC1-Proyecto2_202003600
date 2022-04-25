const { Router } = require("express")

const Ruta = Router()
Ruta.get("/", (req, res) => {
    res.send("El servidor está encendido")
})
module.exports = Ruta;