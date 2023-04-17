const Erick = ('Erick');
const notaDoErickPrimeiro = (6);
const notaDoErickSegundo = (10);
const notaDoErickTerceiro = (8);

const mediaDoErick = (notaDoErickPrimeiro + notaDoErickSegundo + notaDoErickTerceiro) / 3;
//Conta para o resultado da média
console.log(mediaDoErick.toFixed(0))
    
if (mediaDoErick < 5) {
    console.log ('Reprovado')
 }  else if (mediaDoErick >=5 && mediaDoErick <=7) { 
    console.log ('Recuperação')
 }  else if (mediaDoErick >=7 && mediaDoErick <=10) {
    console.log ('Aprovado');
 } 