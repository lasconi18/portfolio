// Função para verificar se um elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a animação aos elementos quando eles aparecem na tela
function animateOnScroll() {
    const elementos = document.querySelectorAll('.animado');

    elementos.forEach((elemento) => {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('fade-in');
        }
    });
}

// Adiciona o evento de rolagem para verificar a visibilidade dos elementos
window.addEventListener('scroll', animateOnScroll);

// Executa a função para animar os elementos ao carregar a página
window.addEventListener('load', animateOnScroll);
