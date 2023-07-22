
let tab = document.querySelector('select#tab')
let num = document.querySelector('input#num')
let r = document.querySelector('div#res')
let valores = [];

function inlista(n, l) {
    //função para detectar se um número está na lista ou não
    if (l.indexOf(Number(n)) !== -1) {
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
    let maior = Number(valores[0])
    let menor = Number(valores[0])
    for(let pos in valores){
        if (valores[pos] > maior){
            maior = valores[pos]
        } if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    r.innerHTML = ''
    if (tab.length == 1) {
    r.innerHTML = 'ao todo temos 1 número'
    } else{
    r.innerHTML =`ao todo temos ${tab.length} números cadastrados <br>`
    r.innerHTML =`o maior valor é ${maior} <br>`
    r.innerHTML =+ `o menor valor é ${menor} <br>`

    }
    
}
