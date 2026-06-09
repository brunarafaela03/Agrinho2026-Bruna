document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o seu botão de inversão de cores
    const botaoInverter = document.querySelector('.cabecalho-titulo-botao');
    const body = document.body;

    // Verifica se o usuário já havia selecionado o modo escuro antes
    if (localStorage.getItem('modo-escuro') === 'ativo') {
        body.classList.add('dark-mode');
    }

    // Adiciona o evento de clique para alternar as cores
    botaoInverter.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Salva a preferência no navegador do usuário
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('modo-escuro', 'ativo');
        } else {
            localStorage.setItem('modo-escuro', 'inativo');
        }
    });
});