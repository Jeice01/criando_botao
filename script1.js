/*Usando a div para abrir o arquivo index.html
document.getElementById('Botão Clicável').addEventListener('click', function() {
    // Cria um objeto XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // Define a função de callback para ser chamada quando a resposta for recebida
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Atualiza o conteúdo da div com a resposta
            document.getElementById('conteúdo').innerHTML = this.responseText;
        }
    };

    // Abre uma requisição GET para o arquivo index.html
    xhttp.open("GET", "index.html", true);
    xhttp.send();
});
*/

/*Usando uma nova guia para abrir o arquivo index.html*/
document.getElementById('Botão Clicável').addEventListener('click', function() {
    // Abre uma nova guia com o conteúdo de index.html
    window.open('index.html', '_blank');
});

