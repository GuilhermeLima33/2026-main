

function abrirPopUp() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopUp() {
    document.getElementById("popup").style.display = "none";
    // Limpar inputs ao fechar
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
}

function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    alert(`Bem-vindo, ${usuario}!`);
    fecharPopUp();
}




function abrirPopUp2() {
    document.getElementById("popup2").style.display = "block";
}

function fecharPopUp2() {
    document.getElementById("popup2").style.display = "none";
}

function confirmarSim() {
    alert("Você clicou em SIM! Item deletado com sucesso.");
    fecharPopUp2();
}

function confirmarNao() {
    alert("Você clicou em NÃO! Operação cancelada.");
    fecharPopUp2();
}




function abrirPopUp3() {
    document.getElementById("popup3").style.display = "block";
}

function fecharPopUp3() {
    document.getElementById("popup3").style.display = "none";
}




const mensagemDoDia = "💡 Mensagem do dia: todo dia é uma nova oportunidade para aprender algo diferente.";

function abrirPopUp4() {
    document.getElementById("popup4").style.display = "block";
    document.getElementById("curiosidade").textContent = mensagemDoDia;
}

function fecharPopUp4() {
    document.getElementById("popup4").style.display = "none";
}



const senhaCorreta5 = "senha123";

function abrirPopUp5Sucesso() {
    document.getElementById("popup5Sucesso").style.display = "block";
}

function fecharPopUp5Sucesso() {
    document.getElementById("popup5Sucesso").style.display = "none";
}

function abrirPopUp5Erro() {
    document.getElementById("popup5Erro").style.display = "block";
}

function fecharPopUp5Erro() {
    document.getElementById("popup5Erro").style.display = "none";
}

function validarSenha5() {
    const usuario = document.getElementById("usuario5").value;
    const senha = document.getElementById("senha5").value;
    
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    if (senha === senhaCorreta5) {
        abrirPopUp5Sucesso();
    } else {
        abrirPopUp5Erro();
    }
    
    // Limpar inputs
    document.getElementById("usuario5").value = "";
    document.getElementById("senha5").value = "";
}




document.addEventListener("DOMContentLoaded", function() {
    // Fechar popup 1 ao clicar no overlay
    const popup1 = document.getElementById("popup");
    if (popup1) {
        popup1.addEventListener("click", function(e) {
            if (e.target === popup1.querySelector(".overlay")) {
                fecharPopUp();
            }
        });
    }
    
   
    const popup2 = document.getElementById("popup2");
    if (popup2) {
        popup2.addEventListener("click", function(e) {
            if (e.target === popup2.querySelector(".overlay")) {
                fecharPopUp2();
            }
        });
    }
    
  
    const popup3 = document.getElementById("popup3");
    if (popup3) {
        popup3.addEventListener("click", function(e) {
            if (e.target === popup3.querySelector(".overlay")) {
                fecharPopUp3();
            }
        });
    }
    

    const popup4 = document.getElementById("popup4");
    if (popup4) {
        popup4.addEventListener("click", function(e) {
            if (e.target === popup4.querySelector(".overlay")) {
                fecharPopUp4();
            }
        });
    }
    
    
    const popup5Sucesso = document.getElementById("popup5Sucesso");
    if (popup5Sucesso) {
        popup5Sucesso.addEventListener("click", function(e) {
            if (e.target === popup5Sucesso.querySelector(".overlay")) {
                fecharPopUp5Sucesso();
            }
        });
    }
    
    
    const popup5Erro = document.getElementById("popup5Erro");
    if (popup5Erro) {
        popup5Erro.addEventListener("click", function(e) {
            if (e.target === popup5Erro.querySelector(".overlay")) {
                fecharPopUp5Erro();
            }
        });
    }
});