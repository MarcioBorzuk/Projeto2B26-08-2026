document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Responsivo Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. Rolar suavemente para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Efeito de rotação nas imagens ao clicar
    const cardImages = document.querySelectorAll('.card-img');

    cardImages.forEach(img => {
        img.addEventListener('click', () => {
            // Evita cliques seguidos durante a animação
            if (img.classList.contains('rotate-effect')) return;

            // Adiciona a classe que executa a rotação no CSS
            img.classList.add('rotate-effect');

            // Remove a classe após 600ms para permitir novos giros
            setTimeout(() => {
                img.classList.remove('rotate-effect');
            }, 600);
        });
    });

});
