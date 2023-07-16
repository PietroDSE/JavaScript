function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.backgroundColor ="#e2cd9f"
        //dia
    } else if (hora > 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor ="orange"
        //tarde
    } else if (hora > 18 && hora > 0){
        img.src = 'noite.png'
        document.body.style.backgroundColor ="darkblue"
        //noite
}
}