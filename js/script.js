// Espera o documento carregar totalmente
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se o botão existe antes de adicionar o evento
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            
            // Salva a preferência para o usuário não ter que trocar toda hora
            const mode = body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', mode);
        });
    }
});

// Aplica o tema salvo assim que a página abre
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}