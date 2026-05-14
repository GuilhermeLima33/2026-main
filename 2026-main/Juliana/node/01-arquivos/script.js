const fs = require ('fs')

fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de notas com node.js"
)

console.log("Arquivo criado com sucesso!")

fs.writeFileSync(
    "informações.txt",
    "Nome: Guilherme Lima , Turma: 3°A/TDS2 , Filme: Quebrando Regras"
)

const pessoa = {
    nome: "Guilherme",
    idade : 18,
    cidade: "Suzano",
    curso: "Desenvolvimento de Sistemas",
    filme: "Quebrando Regras"

}

fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)

console.log("Json criado com sucesso")

const info = {
    nome: "Guilherme",
    idade : 18,
    telefone: "11 97837-8761",
    email: "guigui30042008@gmail.com"

}

fs.writeFileSync(
    "info2.json",
    JSON.stringify(info)
)

console.log("Jason criado com sucesso")


//npm install docx -> biblioteca do word
// importar partes especificas da biblioteca do word
const {
    Document, //Criar o word
    Packer, // transformar documento em word
    Paragraph,
    TextRun
} = require("docx")

// Criando um documento do word

const doc = new Document({
    // página -> seção -> parágrafo -> texto
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Arquivo ")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(
        "relatorio.docx",
        buffer
    )
})