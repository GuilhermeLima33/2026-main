// Verificação de Maioridade
let idade = Number(prompt("Insira sua idade"))
let maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(maioridade)

console.log("-------------------------")
// Par ou Ímpar
let numero = Number(prompt("Insira o número"))
let aux = numero % 2
let valor = aux == 0 ? "Par" : "Ímpar"
console.log(valor)

console.log("-------------------------")
// Resultado Escolar
let nota = Number(prompt("Insira sua nota"))
let aprovar = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(aprovar)

console.log("-------------------------")
// Saldo Bancário
let saldo = Number(prompt("Insira seu saldo"))
let resultado = saldo > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(resultado)

console.log("-------------------------")
// Desconto na Compra
let compra = Number(prompt("Insira o valor da compra"))

let desconto = compra >= 100 ? "Você vai receber 10% de desconto" : "Sem desconto"
console.log(desconto)

console.log("-------------------------")
// Entrada em Evento
let idade2 = Number(prompt("Insira sua idade"))
let entrada = idade2 >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(entrada)

console.log("-------------------------")

// Login Simples
let usuario = prompt("Insira o login")
let login = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(login)

console.log("-------------------------")
// Temperatura
let temp = Number(prompt("Insira a temperatura"))
let temperatura = temp > 30 ? "Está quente" : "Temperatura normal"
console.log(temperatura)

console.log("-------------------------")
// Número Positivo ou Negativo
let numero1 = Number(prompt("Insira um número"))
let valor1 = numero1 > 0 ? "Número positivo" : "Número negativo ou zero"
console.log(valor1)

console.log("-------------------------")
// Faixa Etária
let idade3 = Number(prompt("Insira sua idade"))
let faixa = idade3 < 12 ? "Criança" : idade3 < 18 ? "Adolescente" : idade3 < 60 ?
"Adulto" : "Idoso"
console.log(faixa)

console.log("-------------------------")
// Velocidade do Veículo
let vel = Number(prompt("Insira a velocidade do veículo"))
let velocidade = vel > 80 ? "Multado" : "Dentro do limite"
console.log(velocidade)

console.log("-------------------------")
// Compra Aprovada
let valor2 = Number(prompt("Insira o valor da compra"))
let limite = Number(prompt("Insira o limite do cartão"))
let aprovar1 = valor2 <= limite ? "Compra aprovada" : "Compra recusada"
console.log(aprovar1)

console.log("-------------------------")
// Sistema de Pontuação de Jogo
let pontuacao = Number(prompt("Insira sua pontuação"))
let classificação = pontuacao < 100 ? "Iniciante" : pontuacao < 500 ?
"Intermediário" : pontuacao < 100 ? "Avançado" : "Mestre"
console.log(classificação)