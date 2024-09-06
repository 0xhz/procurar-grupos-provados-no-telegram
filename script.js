document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-query').value;
    
    if (query) {
        // Comando fixo com <anything> e termo de busca fornecido pelo usuário
        let googleSearchUrl = `https://www.google.com/search?q=site:t.me/joinchat+<anything>+${encodeURIComponent(query)}`;

        // Abre a pesquisa em uma nova aba
        window.open(googleSearchUrl, '_blank');
    }
});
