function mostrarPagina(pagina) {
    // Oculta todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.style.display = 'none');

    // Mostra a página selecionada
    document.getElementById(pagina).style.display = 'block';
}

// Mostra a página principal por padrão
mostrarPagina('principal');
