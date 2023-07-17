function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById('iano')
    var res = document.getElementById('r')
    var img = document.querySelector('img#morto')
    if (fano.Value.length == 0 || fano.Value.length > ano){
        alert('!VERIFIQUE!')
    }
}