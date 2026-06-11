let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")

confirmar.addEventListener("input", function() {

let numeros = /[0-9]/.test(senha.value)
let letras = /[a-z]/.test(senha.value)
let letras2 = /[A-Z]/.test(senha.value)
let especial = /[!@#$%&*]/.test(senha.value)
let tamanho = senha.value.length >= 12

    // if(senha.value == confirmar.value){
    //     mensagem.innerText = "As senhas são iguais"
    //     mensagem.classList.add("certo")
    //     mensagem.classList.remove("errado")
    // }else{
    //     mensagem.innerText = "As senhas são iguais"
    //     mensagem.classList.remove("certo")
    //     mensagem.classList.add("errado") 
    // }

    if(senha.value == confirmar.value && numeros && letras && especial && tamanho && letras2){
        mensagem.innerText = "As senhas são iguais"
        mensagem.classList.add("certo")
        mensagem.classList.remove("errado")
    }else{
        mensagem.innerText = "As senhas precisa ter letras maíusculas , números, caracter especial, ter no mínimo 12 caracteres e ser igual"
        mensagem.classList.remove("certo")
        mensagem.classList.add("errado") 
    }
})