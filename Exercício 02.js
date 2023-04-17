const alturaErick = 1.78
const pesoErick = 79    

const imc = pesoErick / (alturaErick * alturaErick);
console.log(imc.toFixed(1))

if (imc < 18.5) {
    console.log('Você está abaixo do peso')
} else if (imc >=18.5 && imc <25) {
    console.log('Você está no peso normal do IMC')
} else if (imc >=25 && imc <30) {
    console.log('Você está acima do peso!')
} else if (imc >=30 && imc <40) {
    console.log('Você está obeso')
} else {
    console.log('Você está com Obesidade grave')
}