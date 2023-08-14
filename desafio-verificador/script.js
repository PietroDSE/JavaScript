
let tab = document.querySelector('select#tab')
let num = document.querySelector('input#num')
let r = document.querySelector('div#res')
let valores = [];

function inlista(l) {
    //função para detectar se um número está na lista ou não
    if (l.indexOf !== -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    //função para adicionar o número no select
    if (inlista(num.value, valores)) {
        alert('Valor já existe na lista!')
    } else if (num.value.length === 0) {
        alert('Valor inválido, digite um número e tente novamente!')
    } else if (Number(num.value) > 100) {
        alert('Valor inválido, digite um número menor e tente novamente!')
    } else if (Number(num.value) <= 0) {
        alert('Adicione números positivos e tente novamente!')
    } else {
        valores.push(Number(num.value))
        let optionElement = document.createElement('option')
        optionElement.text = `valor ${num.value} adicionado`
        tab.appendChild(optionElement)
        r.innerHTML = ''
         // Adiciona a opção ao elemento select
    }
    //atributo para limpar a caixa do input
    num.value = ''
    //elemento para focar o mouse na caixa do input
    num.focus()
}


function finalizar() {   
    if (valores.length == 0){
        alert('digite um valor antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
    for(let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
            
        if (valores[pos] < menor)
            menor = valores[pos]
            
        }
        média = soma / tot
        r.innerHTML = ''
        r.innerHTML +=`ao todo temos ${tot} números cadastrados<br>`
        r.innerHTML +=`o maior valor é ${maior}<br>`
        r.innerHTML += `o menor valor é ${menor}<br>`
        r.innerHTML += `a soma dos valores é igual á ${soma} <br>`
        r.innerHTML += `a média é de ${média}<br>`

    }
}
    


 
    
    

