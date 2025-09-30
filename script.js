document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------
    // Botões do jogo
    // ---------------------------
    const btns = document.querySelectorAll('.btn-proximo');
    btns.forEach(button => {
        button.addEventListener('click', function(){
            const atual = document.querySelector('.ativo');
            const proximoId = 'passo-' + this.dataset.proximo;
            const proximo = document.getElementById(proximoId);
            if (!proximo) return;

            atual.classList.remove('ativo');
            proximo.classList.add('ativo');
        });
    });

    // ---------------------------
    // Fundo de estrelas
    // ---------------------------
    const starsEl = document.getElementById('stars');
    if (starsEl) {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.width = (Math.random() * 2 + 1) + 'px';
            star.style.height = (Math.random() * 2 + 1) + 'px';
            star.style.animationDuration = (Math.random() * 2 + 1) + 's';
            starsEl.appendChild(star);
        }
    }

});

