function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = new Date()
var minuto = min.getMinutes()
var seg = new Date()
var segundos = seg.getSeconds()
msg.innerHTML += ` ${hora} horas`
msg.innerHTML  += `, ${minuto} minutos`
msg.innerHTML += ` e ${segundos} segundos`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.backgroundColor ="#e2cd9f"
        
        //dia
    } else if (hora > 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor ="orange"
        
        //tarde
    } else{
        img.src = 'noite.png'
        document.body.style.backgroundColor ="darkblue"
        
        //noite
}

}