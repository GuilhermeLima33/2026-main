
let numero = Number(prompt("Insira um número de 1-7"));
switch (numero) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.");
}
console.log("----------------------");


let idade = Number(prompt("Insira sua idade"));
switch (idade) {
    case 5:
        console.log("Infantil A");
        break;
    case 10:
        console.log("Infantil B");
        break;
    case 15:
        console.log("Juvenil A");
        break;
    case 20:
        console.log("Juvenil B");
        break;
    case 30:
        console.log("Adulto");
        break;
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.");
}
console.log("----------------------");

// Turno de Trabalho
let turno = prompt("Insira seu turno");
switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break; 
    default:
        console.log("Turno inválido. Insira M, V ou N.");
}
console.log("----------------------");


let pizza = Number(prompt("Insira um número de 1-5"));
switch (pizza) {
    case 1:
        console.log("Mussarela");
        break;
    case 2:
        console.log("Calabresa");
        break;
    case 3:
        console.log("Frango com Catupiry");
        break;
    case 4:
        console.log("Calabresa com Mussarela");
        break;
    case 5:
        console.log("Portuguesa");
        break;
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.");
}
console.log("----------------------");

// Estações do Ano
let num = Number(prompt("Insira um número de 1-4"));
switch (num) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.");
}
console.log("----------------------");

let menu = Number(prompt("Insira um número de 1-4 para escolher uma operação matemática"));
let n1 = Number(prompt("Insira um número para operação"));
let n2 = Number(prompt("Insira o outro número para operação"));

switch (menu) {
    case 1:
        console.log("Soma " + (n1 + n2));
        break;
    case 2:
        console.log("Subtração " + (n1 - n2));
        break;
    case 3:
        console.log("Multiplicação " + (n1 * n2));
        break;
    case 4:
        if (n2 === 0) {
            console.log("Divisão: Não é possível dividir por zero!");
        } else {
            console.log("Divisão " + (n1 / n2));
        }
        break;
    default:
        console.log("Operação Inválida");
}
console.log("----------------------");


let codigo = Number(prompt("Insira o código do produto"));
switch (codigo) {
    case 100:
        console.log("Caneta");
        break;
    case 200:
        console.log("Lápis");
        break;
    case 300:
        console.log("Borracha");
        break;
    case 400:
        console.log("Caderno");
        break;
    default:
        console.log("Produto não encontrado");
}
console.log("----------------------");


let letra = prompt("Insira uma letra");
switch (letra) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "F":
        console.log("Reprovado");
        break;
    default:
        console.log("Conceito inválido");
}
console.log("----------------------");

let jogo = Number(prompt("Insira um número para ação do jogo (1-4)"));
switch (jogo) {
    case 1:
        console.log("Atacar");
        break;
    case 2:
        console.log("Defender");
        break;
    case 3:
        console.log("Curar");
        break;
    case 4:
        console.log("Fugir");
        break;
    default:
        console.log("Opção inválida. Você perdeu a vez.");
}
console.log("----------------------");


let moeda = Number(prompt("Insira um número para conversão (1-3)"));
switch (moeda) {
    case 1:
        console.log("Real para Dólar " + (100 * 0.19));
        break;
    case 2:
        console.log("Dólar para Real " + (100 * 5.20));
        break;
    case 3:
        console.log("Real para Euro " + (100 * 0.16));
        break;
    default:
        console.log("Opção Inválida");
}
console.log("----------------------");


let atendimento = Number(prompt("Insira um número (1-4)"));
switch (atendimento) {
    case 1:
        console.log("Suporte Técnico");
        break;
    case 2:
        console.log("Financeiro");
        break;
    case 3:
        console.log("Comercial");
        break;
    case 4:
        console.log("Cancelamento");
        break;
    default:
        console.log("Setor Inválido");
}
console.log("----------------------");

let cardapio = Number(prompt("Insira um número do cardapio"));
switch (cardapio) {
    case 1:
        console.log("Hambúrguer");
        break;
    case 2:
        console.log("Pizza");
        break;
    case 3:
        console.log("Suco");
        break;
    case 4:
        console.log("Sorvete");
        break;
    default:
        console.log("Pedido inválido");
}
console.log("----------------------");


let nota = Number(prompt("Insira uma nota para nosso atendimento"));
switch (nota) {
    case 1:
        console.log("Péssimo");
        break;
    case 2:
        console.log("Ruim");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bom");
        break;
    case 5:
        console.log("Excelente");
        break;
    default:
        console.log("Nota inválida");
}
console.log("----------------------");

let usuario = Number(prompt("Que tipo de usuário você é? (1-4)"));
switch (usuario) {
    case 1:
        console.log("Administrador");
        break;
    case 2:
        console.log("Professor");
        break;
    case 3:
        console.log("Aluno");
        break;
    case 4:
        console.log("Visitante"); // Corrigido: console;log trocado por console.log
        break;
    default:
        console.log("Usuário inválido");
}
console.log("----------------------");

let filme = Number(prompt("Escolha sua categoria favorita de filme (1-5)"));
switch (filme) {
    case 1:
        console.log("Ação");
        break;
    case 2:
        console.log("Comédia");
        break;
    case 3:
        console.log("Drama");
        break;
    case 4:
        console.log("Terror");
        break;
    case 5:
        console.log("Animação");
        break;
    default:
        console.log("Categoria inválida");
}