document.addEventListener('DOMContentLoaded', function () {
    
    // 1. CONTADOR DINÂMICO (ANIMAÇÃO DOS NÚMEROS)
    const valores = document.querySelectorAll('.valor');
    const duracao = 3200; // Tempo total da animação em milissegundos (mais lento)

    valores.forEach((valor) => {
        const alvo = +valor.dataset.target;
        let atual = 0;
        const incremento = Math.max(1, Math.ceil(alvo / (duracao / 16))); // baseado em 60fps

        const atualizar = () => {
            atual += incremento;
            if (atual > alvo) atual = alvo;
            
            // Adiciona o sinal de "+" apenas no contador de 1000 clientes
            valor.textContent = atual + (alvo === 1000 && atual === alvo ? '+' : '');
            
            if (atual < alvo) {
                requestAnimationFrame(atualizar);
            }
        };
        atualizar();
    });

    // 2. EXIBIÇÃO CONDICIONAL DINÂMICA DO CAMPO "DESTINO"
    const radioEstudio = document.querySelector('input[value="Estúdio"]');
    const radioLocal = document.querySelector('input[value="Local"]');
    const campoDestino = document.getElementById('campo-destino');
    const inputDestino = document.getElementById('input-destino');

    const gerenciarCampoDestino = () => {
        if (radioLocal.checked) {
            campoDestino.classList.add('visivel');
            inputDestino.required = true;
        } else {
            campoDestino.classList.remove('visivel');
            inputDestino.required = false;
            inputDestino.value = ''; // limpa se o usuário mudar de ideia
        }
    };

    radioEstudio.addEventListener('change', gerenciarCampoDestino);
    radioLocal.addEventListener('change', gerenciarCampoDestino);
    gerenciarCampoDestino(); // Executa ao carregar para garantir o estado inicial

    // 3. ENVIO DO FORMULÁRIO COM FEEDBACK CUSTOMIZADO
    const formCadastro = document.getElementById('form-cadastro');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    formCadastro.addEventListener('submit', function (event) {
        event.preventDefault();
        const dados = new FormData(formCadastro);
        const nome = dados.get('nome');
        const tipo = dados.get('tipo');
        const destino = dados.get('destino');

        let textoFeedback = `Obrigado, ${nome}! Recebemos seu cadastro para uma sessão `;
        if (tipo === 'Estúdio') {
            textoFeedback += `em nosso <strong>Estúdio Premium</strong> em São Paulo.`;
        } else {
            textoFeedback += `com destino para <strong>${destino}</strong>.`;
        }
        textoFeedback += ` Nossa equipe entrará em contato nas próximas horas para confirmar os detalhes.`;

        mensagemSucesso.innerHTML = textoFeedback;
        mensagemSucesso.classList.add('show');
        
        formCadastro.reset();
        gerenciarCampoDestino(); // Reseta a visibilidade do campo dinâmico
    });

    // 4. CARROSSEL DE FOTOS AUTOMÁTICO
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let indiceAtual = 0;
    const tempoSlide = 6000; // 6 segundos
    let intervaloCarrossel;

    const mostrarSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('ativo', i === index);
            dots[i].classList.toggle('ativo', i === index);
        });
        indiceAtual = index;
    };

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            mostrarSlide(+dot.dataset.index);
            reiniciarTimer();
        });
    });

    const proximoSlide = () => {
        mostrarSlide((indiceAtual + 1) % slides.length);
    };

    const reiniciarTimer = () => {
        clearInterval(intervaloCarrossel);
        intervaloCarrossel = setInterval(proximoSlide, tempoSlide);
    };

    mostrarSlide(0);
    reiniciarTimer();

    // 5. ACORDION DO FAQ (ABRE E FECHA)
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');

    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const item = pergunta.parentElement;
            item.classList.toggle('ativo');
        });
    });
});