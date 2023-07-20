
function clicou(){
    let inicio = document.querySelector('input#n1')
    let fim = document.querySelector('input#n2')
    let distância = document.querySelector('input#n3')
    let res = document.querySelector('div#r')


    if (inicio.value.length == 0 || fim.value.length == 0 || distância.value.length == 0){
        window.confirm('certifique-se de que preencheu todos os campos corretamente')
    } else{
        res.innerHTML = 'Contando... <br>'

    }
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let d = Number(distância.value)
        if (d >= f){
            window.confirm('digite um passo válido! considerando 1')
            d = 1
        }
        if (d <= 0){
            window.confirm('digite um valor de passos válido! considerando passo 1')
            d = 1
        }
        if (i <= f){
            //crescente
            for (let c = i; c <= f; c += d){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if (i >= f){
            //regressiva
            for (let c2 = i; c2 >= f; c2 -= d){
            res.innerHTML += `${c2} \u{1F449} `
            }
        }

        res.innerHTML +=`\u{1F3C1}`
    }
