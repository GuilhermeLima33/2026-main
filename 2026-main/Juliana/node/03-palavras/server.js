const express = require("express")
const mysql = require ("mysql2")
const cors = require ("cors")

// cria o servidor usando o express
const app = express ()

// ativar o cors no projeto
app.use(cors())

// permite que os dados resebam json
// {palavra: "maça"}
app.use(express.json())

// procura pelo index.html dentro da pasta public
app.use(express.static("public"))

// Conexão mysql 
const conexao = mysql.createConnection({
    host: "localhost", // endereço
    user: "root", // usuario
    password: "senai", //senha
    database: "palavras" //banco de dados
})

// testar a conexão

conexao.connect((erro) => {
    // quando der erro
    if(erro){
        console.log("Erro na conexão")
    }else{
        console.log("Conectado ao MySQL")
    }
})
app.post("/salvar", (req, res) =>{
    // pea a palavra enviada pelo js(front-end)
   // req.body = dados enviados
   //palavra = nome da propriedade
const palavra  = req.body.palavra

// comando sql para inserir dados
const sql = "INSERT INTO palavra (texto) VALUES (?)"

conexao.query(sql, [palavra], (erro) => {
    if(erro){
        res.send("Erro no insert")
    }else{
        res.send("palavra salva")
    }
})
})

app.listen(3000, () =>{
    console.log("Servidor funcionando")
})