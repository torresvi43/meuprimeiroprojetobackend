const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:"Simara Conceição",
        imagem:"imagemdasimara",
        minibio:"Desenvolvedora e Instrutora"
    },
    {
        nome: "Iana Chan",
        imagem:"imagemdaiana",
        minibio:"Fundadora da PrograMaria"
    },
    {
        nome: "Nina Da Hora",
        imagem:"imagemdanina",
        minibio:"Hacker antirracista"
    }
    ]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)
app.use(router.get("/mulheres", mostraMulheres))