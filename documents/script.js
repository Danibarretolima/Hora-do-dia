function carregar(){

    var recado = window.document.getElementById('recado')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    recado.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12){
        img.src = 'Imagens/manha.PNG'
        document.body.style.background = '#E2CD9F'

    } else if(hora >= 13 && hora <= 18){
        img.src = 'Imagens/tarde.PNG'
        document.body.style.background = '#b9846f'

    } else{
        img.src = 'Imagens/noite.PNG'
        document.body.style.background = '#515154'
    }








}