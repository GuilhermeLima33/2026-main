let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")

confirmar.addEventListener("input", function() {

let numeros = /[0-9]/.test(senha.value)
let letras = /[a-zA-Z]/.test(senha.value)
let especial = /[!@#$%&*]/.test(senha.value)
let tamanho = senha.value.length >= 10

    // if(senha.value == confirmar.value){
    //     mensagem.innerText = "As senhas são iguais"
    //     mensagem.classList.add("certo")
    //     mensagem.classList.remove("errado")
    // }else{
    //     mensagem.innerText = "As senhas são iguais"
    //     mensagem.classList.remove("certo")
    //     mensagem.classList.add("errado") 
    // }

    if(senha.value == confirmar.value && numeros && letras && especial && tamanho){
        mensagem.innerText = "As senhas são iguais"
        mensagem.classList.add("certo")
        mensagem.classList.remove("errado")
    }else{
        mensagem.innerText = "As senhas precisa ter letras, números, caracter especial, ter no mínimo 10 caracteres e ser igual"
        mensagem.classList.remove("certo")
        mensagem.classList.add("errado") 
    }
})