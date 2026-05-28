// async e await usamos quando trabalhamos com coisas ou processos que podem demorar


async function salvar (){
    let palavra = document.getElementById ("palavra").value

    // await vai esperar a requisição terminar 
    // espera terminar de alvar antes de salvar a próxima

    await fetch ("/salvar", {
        // define o tipo de requisição
        method: "POST",
        // Define as informações da requisição
        headers: {
            //informamos o tipo de json
            "Content-Type": "application/json"
        },
        //body = dados enviados para servidos
        //JASON.stringify = transforma em jason

        body: JSON.stringify({
            palavra: palavra
            // valor do input
        })

    })

    alert("palavra salva!")
}