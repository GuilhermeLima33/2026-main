

let idade = Number(prompt("Insira sua idade"))
if(idade >= 18) {
console.log("Você é maior de idade")
} else {
console.log("Você é menor de idade")
}

console.log("---------------------")


let numero = Number(prompt("Informe um número"))
let resto = numero % 2
if (resto == 0) {
console.log("Número é par")
} else {
console.log("Número é impar")
}

console.log("---------------------")



let nota = Number(prompt("Insira sua nota"))
if(nota >= 7) {
console.log("Aprovado")

} else {
console.log("Reprovado")
}

console.log("---------------------")


let idade2 = Number(prompt("Insira sua idade"))
if(idade2 >= 18) {
console.log("Entrada Permitida")
} else {
console.log("Entrada proibida")
}

console.log("---------------------")

let senha = Number(prompt("Insira a senha"))
if(senha == 1234){
console.log("Senha correta")
} else {
console.log("Senha incorreta")
}

console.log("---------------------")


let temp = Number(prompt("Insira a temperatura"))
if(temp > 30) {
console.log("Está calor")
} else {
console.log("Está frio")
}

console.log("---------------------")

let num = Number(prompt("Insira um número"))
if(num > 0){
console.log("Número positivo")
} else {
console.log("Número negativo")
}

console.log("---------------------")

let saldo = Number(prompt("Insira o saldo"))
let saque = Number(prompt("Quanto quer sacar?"))
if(saldo > saque) {
console.log("Saque realizado")

} else {
console.log("Saldo insulficiente")
}

console.log("---------------------")


let valor = Number(prompt("Insira o valor da compra"))
if(valor >= 200) {
console.log("Desconto aplicado")
} else {
console.log("Sem desconto")
}

console.log("---------------------")


let n1 = Number(prompt("Insira um número"))
let n2 = Number(prompt("Insira outro número"))
if(n1 > n2) {
console.log("O primeiro número é maior")
} else {
console.log("O segundo número é maior")
}

console.log("---------------------")


let nome = prompt("Insira o login")
if(nome == "admin"){
console.log("Acesso permitido")
} else {
console.log("Acesso negado")
}

console.log("---------------------")


let nota1 = Number(prompt("Insira sua nota"))
if(nota1 >= 9) {
console.log("Excelente")
} else {
console.log("Pode melhorar")
}

console.log("---------------------")

let horario = Number(prompt("Insira o horário"))
if(horario < 18 && horario > 8) {
console.log("Horário de funcionamento")

} else {
console.log("Fora do horário")
}

console.log("---------------------")


let cadastro = prompt("Tem cadastro?")
if(cadastro == true) {
console.log("Usuário cadastrado")
} else {
console.log("Cadastro necessário")
}