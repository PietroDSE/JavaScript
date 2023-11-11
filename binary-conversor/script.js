let input_bin = document.querySelector('input#convert_bin')
let input_dec = document.querySelector('input#convert_dec')
let span_bin = document.querySelector('span#binary_result')
let span_dec = document.querySelector('span#decimal_result')
let button_dec = document.querySelector('button#decimal_b')
let button_bin = document.querySelector('button#binary_b')
let binary_values = /^[01]+$/

button_bin.addEventListener('click', () =>{
    if(!binary_values.test(input_bin.value)){
        span_bin.innerHTML ='[ERROR]'
    }else{
        let binary_value = input_bin.value
        let decimal_value = 0
        let length = binary_value.length

        for(let i = 0; i < length; i++){
            let digit = parseInt(binary_value[length - i - 1], 2)
            decimal_value += digit * Math.pow(2, i)
        }
        span_bin.style.transition ='opacity 1.2s'
        span_bin.style.opacity = '0'
        setTimeout(() => {
            span_bin.innerHTML = decimal_value
            span_bin.style.opacity ='1'
        }, 1200)
        span_bin.innerHTML = decimal_value
    }
    input_bin.focus()
    input_bin.value =''
})

button_dec.addEventListener('click', () =>{
    if(!binary_values.test(input_dec.value)){
        span_bin.innerHTML ='[ERROR]'
    }else{
        let binary_value = input_bin.value
        let decimal_value = 0
        let length = binary_value.length

        for(let i = 0; i < length; i++){
            let digit = parseInt(binary_value[length - i - 1], 2)
            decimal_value += digit * Math.pow(2, i)
        }
        span_bin.style.transition ='opacity 1.2s'
        span_bin.style.opacity = '0'
        setTimeout(() => {
            span_bin.innerHTML = decimal_value
            span_bin.style.opacity ='1'
        }, 1200)
        span_bin.innerHTML = decimal_value
    }
    input_bin.focus()
    input_bin.value =''
})