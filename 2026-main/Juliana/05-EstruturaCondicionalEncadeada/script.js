// Classificação de Nota
let nota = Number(prompt("Insira sua nota"))
if(nota >= 9){
console.log("Excelente")
} else if(nota >= 7) {
console.log("Bom")
} else if (nota >= 5){
console.log("Regular")
} else if (nota < 5){
console.log("Insulficiente")
}
console.log("---------------------")

// Sistema de Aprovação Escolar
let nota2 = Number(prompt("Insira sua nota"))
let falta = Number(prompt("Insira suas faltas"))
if(nota2 >= 7 && falta <= 10){
console.log("Aprovado")
} else if (nota2 >= 5 && falta <= 10){
console.log("Recuperação")
} else {
console.log("Reprovado")
}
console.log("---------------------")

// Verificação de Idade
let idade = Number(prompt("Insira sua idade"))
if(idade < 12) {

console.log("Criança")
} else if (idade >= 12 && idade <= 17) {
console.log("Adolescente")
} else if (idade >= 18 && idade <= 59) {
console.log("Adulto")
} else {
console.log("Idoso")
}
console.log("---------------------")

// Classificação de Temperatura
let temp = Number(prompt("Insira a temperatura"))
if(temp >= 35) {
console.log("Muito quente")
} else if (temp >= 25){
console.log("Quente")
} else if (temp >= 15) {
console.log("Agradável")
} else {
console.log("Frio")
}
console.log("---------------------")

// Sistema de Descontos
let valor = Number(prompt("Insira o valor da compra?"))
if(valor >= 500) {
console.log("20% de desconto")
} else if (valor >= 300) {

console.log("15% de desconto")
} else if (valor >= 100){
console.log("10% de desconto")
} else {
console.log("Sem desconto")
}
console.log("---------------------")

// Classificação de Velocidade
let vel = Number(prompt("Insira a velocidade do carro"))
if(vel <= 60) {
console.log("Dentro do limite")
} else if(vel <= 80) {
console.log("Atenção")
} else if (vel <= 100) {
console.log("Multa leve")
} else {
console.log("Multa grave")
}
console.log("---------------------")

// Turno de Estudo
let turno = prompt("Insira seu turno")
if(turno == "M"){
console.log("Matutino")
} else if (turno == "V"){
console.log("Vespertino")
} else if (turno == "N"){

console.log("Noturno")
} else {
console.log("Turno inválido")
}
console.log("---------------------")

// Avaliação de IMC (Simplificado)
let imc = Number(prompt("Insira o IMC"))
if(imc < 18.5){
console.log("Abaixo do peso")
} else if (imc <25) {
console.log("Peso normal")
} else if(imc < 30){
console.log("Sobrepeso")
}
console.log("---------------------")

// Classificação de Pontuação em Jogo
let ponto = Number(prompt("Insira sua pontuação"))
if(ponto >= 1000) {
console.log("Nível Mestre")
} else if (ponto >= 700) {
console.log("Nível Avançado")
} else if (ponto >= 400){
console.log("Nível Intermediário")
} else {
console.log("Iniciante")
}

console.log("---------------------")

// Verificação de Horário
let horario = Number(prompt("Insira o horário"))
if(horario >= 6 && horario <= 11){
console.log("Bom dia!")
} else if (horario >= 12 && horario <= 17) {
console.log("Boa tarde!")
} else if (horario >= 18 && horario <= 23) {
console.log("Boa noite!")
} else if (horario >= 0 && horario <= 5) {
console.log("Boa madrugada!")
} else {
console.log("Horário inválido")
}
console.log("---------------------")

// Categoria de Produto
let codigo = Number(prompt("Insira o código do produto"))
if(codigo == 1){
console.log("Alimento")
} else if (codigo == 2){
console.log("Eletrônico")
} else if (codigo == 3) {
console.log("Roupas")
} else if (codigo == 4){
console.log("Livros")
} else {

console.log("Categoria Inválida")
}
console.log("---------------------")

// Situação Financeira
let saldo = Number(prompt("Insira o saldo"))
if(saldo >= 2000) {
console.log("Ótima")
} else if (saldo >= 1000) {
console.log("Boa")
} else if (saldo >=0) {
console.log("Regular")
} else {
console.log("Endividado")
}
console.log("---------------------")

// Classificação de Idade para CNH
let idade2 = Number(prompt("Insira sua idade"))
if(idade2 < 18){
console.log("Não pode dirigir")
} else if (idade2 >= 18 && idade2 < 65){
console.log("Pode dirigir")
} else {
console.log("Renovação especial")
}
console.log("---------------------")

// Avaliação de Atendimento
let nota3 = Number(prompt("Insira a nota de atendimento"))
if(nota3 >= 9 && nota3 <= 10){
console.log("Excelente")
} else if (nota3 >= 7){
console.log("Bom")
} else if (nota3 >= 5) {
console.log("Regular")
} else {
console.log("Ruim")
}