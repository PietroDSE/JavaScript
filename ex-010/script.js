function calculando(){
    let res = document.querySelector('select#tab')
    let num =  document.querySelector('input#num')
    if (num.value.length == 0){
        window.alert('[erro]!. digite um número válido!')
     
    } else{
            let n = Number(num.value)
            let c = 1
            res.innerHTML = ''
            while(c <= 10) {
                let item = document.createElement('option')
                item.text = `${n} X ${c} = ${n * c}`
                res.appendChild(item)
                item.value = `tab${c}`
                c++
            }
    }
    
}