
const precoCombustivel = 5.79;
//Preço do combustível
const gastoMedio = 1;
//Gasto médio do combustível por KM
const distanciaKM = 49;
//Distância em KM da Viagem

const litrosConsumidos = distanciaKM / gastoMedio;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);


