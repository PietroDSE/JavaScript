

var n1 =Number(prompt('qual o preço do produto?'))

document.writeln(`o produto custa ${n1.toFixed(2).replace('.', ','.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))}`)

