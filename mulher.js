const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: "Vitoria Torres",
        imagem: "https://i.pinimg.com/564x/c3/44/1c/c3441ca5ac48b06f90450f04fb3f9a5c.jpg",
        minibio: "desenvolvedora em formação"
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)