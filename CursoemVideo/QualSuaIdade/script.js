function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO!!! Verifique os dados novamente seu arrombado!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13) {
                //crianca
                img.setAttribute('src', 'kidM.png')
            } else if (idade < 19){
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'velho.png')
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 13) {
                //crianca
                img.setAttribute('src', 'kidF.png')
            } else if (idade < 19){
                //jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
}
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
}
