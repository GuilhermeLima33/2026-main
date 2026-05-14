// 1. Selecionar elementos
let itens1 = document.querySelectorAll(".item1");
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function() {
    itens1.forEach(function(item) {
        item.style.backgroundColor = "cyan";
    });
});

// 2. Adicionar classe em todos (P e DIV separados pelo mesmo seletor)
let elementos2 = document.querySelectorAll(".item2");
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function() {
    elementos2.forEach(function(el) {
        el.classList.add("ativo");
    });
});

// 3. Clique em todos
let itens3 = document.querySelectorAll(".item3");

itens3.forEach(function(item) {
    item.addEventListener("click", function() {
        console.log("clicou");
    });
});

// 4. Adicionar classe ao clicar
let itens4 = document.querySelectorAll(".item4");

itens4.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.add("rosa");
    });
});

// 5. Toggle
let itens5 = document.querySelectorAll(".item5");

itens5.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("rosa");
    });
});

// 6. Destacar vários
let itens6 = document.querySelectorAll(".item6");

itens6.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.add("destaque");
    });
});

// 7. Remover destaque ao clicar novamente
let itens7 = document.querySelectorAll(".item7");

itens7.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("destaque");
    });
});

// 8. Seleção única
let itens8 = document.querySelectorAll(".item8");

itens8.forEach(function(item) {
    item.addEventListener("click", function() {
        itens8.forEach(function(i) {
            i.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// 9. Menu ativo
let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        menuItems.forEach(function(i) {
            i.classList.remove("active");
        });
        item.classList.add("active");
    });
});