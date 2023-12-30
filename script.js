// percorre todos os links da pagina e pega o conteudo e joga nesse index removendo o que estava na main
document.querySelectorAll('.pagina').forEach(link => {
    const espacoPrincipal = document.querySelector('main')

    link.onclick = function (e) {
        e.preventDefault();
        espacoPrincipal.innerHTML = ''

        fetch(link.href)
            .then(resp => resp.text())
            .then(html => {
                espacoPrincipal.innerHTML = html
                Clique()
            })
    }
})

// funcao para quando eu clicar na imagem ela aumentar para 100% da altura da div, porem ela ta aumentando em qualquer lugar da div pq eu upei a imagem por css
function Clique() {
    const imagemDiv = document.querySelector('.imagem')

    if (imagemDiv) {
        imagemDiv.onclick = function () {
            imagemDiv.classList.toggle('clicada') // Adiciona ou remove a classe clicada
        }
    }
}


// Clique na logo volta para o index
const logo = document.getElementById('logo')
logo.addEventListener('click', function () {
    window.location.href = 'index.html'
})