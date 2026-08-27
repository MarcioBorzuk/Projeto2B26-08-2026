document.addEventListener('DOMContentLoaded', () => {

    // 1. Alternar Menu Responsivo
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // 2. Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
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

    // 4. Efeito de rotação nas imagens dos Cards ao clicar ou interagir via Teclado
    const cardImages = document.querySelectorAll('.card-img');

    function acionarRotacao(img) {
        if (img.classList.contains('rotate-effect')) return;

        img.classList.add('rotate-effect');

        // Remove a classe após o tempo da transição no CSS (800ms)
        setTimeout(() => {
            img.classList.remove('rotate-effect');
        }, 800);
    }

    cardImages.forEach(img => {
        // Clique do mouse
        img.addEventListener('click', () => acionarRotacao(img));

        // Acionamento por teclado (Enter ou Espaço para Acessibilidade)
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                acionarRotacao(img);
            }
        });
    });

    // 5. Recursos de Acessibilidade (Alto Contraste e Tamanho de Fonte)
    const toggleContrast = document.getElementById('toggleContrast');
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    let fontFactor = 100;

    if (toggleContrast) {
        toggleContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
        });
    }

    if (increaseFont && decreaseFont) {
        increaseFont.addEventListener('click', () => {
            if (fontFactor < 130) {
                fontFactor += 10;
                document.body.style.fontSize = `${fontFactor}%`;
            }
        });

        decreaseFont.addEventListener('click', () => {
            if (fontFactor > 90) {
                fontFactor -= 10;
                document.body.style.fontSize = `${fontFactor}%`;
            }
        });
    }
});
