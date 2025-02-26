// Função para navegação suave ao clicar nos links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o destino da âncora
        const target = document.querySelector(this.getAttribute('href'));

        // Rola suavemente até o destino
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Função para destacar a navegação ativa
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Ativa o destaque no link enquanto rola a página
window.addEventListener('scroll', setActiveLink);

// Inicializa a navegação ativa quando a página carrega
window.addEventListener('load', setActiveLink);
