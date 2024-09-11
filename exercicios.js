//EXERCÍCIO 1

//aqui informaria o numero puxado do front end
let numeroSequencia = 1;
let sequenciaFibonacci = [];
let ultimoValor = 1, penultimoValor = 0;
sequenciaFibonacci.push(penultimoValor);
sequenciaFibonacci.push(ultimoValor);

while (true) {
    let proximoNumero = penultimoValor + ultimoValor;

    if (proximoNumero > numeroSequencia) {
        break
    }

    sequenciaFibonacci.push(proximoNumero);

    penultimoValor = ultimoValor;
    ultimoValor = proximoNumero;
}

console.log("----- questão 1 -----");
if (sequenciaFibonacci.includes(numeroSequencia)) {
    console.log("Numero existe na sequencia de fibonnaci");
} else {
    console.log("Numero NÃO existe na sequencia de fibonnaci");
}

//EXERCICIOS 2
let palavra = "Exercicio de vaga para target sistemas";
let palavraEmCaps = palavra.toUpperCase();
let quantidadeDeLetra = 0;


for (let i2 = 0; i2 <= palavraEmCaps.length; i2++) {
    if(palavraEmCaps[i2] == 'A'){
        quantidadeDeLetra++
    }
}

console.log("----- questão 2 -----");
console.log("A quantidade de palavras é "+quantidadeDeLetra);

let indice=12,soma=0,k=1;

while (k < indice) {
    k+=1;
    soma = soma+k;    
}

console.log("----- questão 3 -----");
console.log(" A SOMA VAI DAR " + soma);


console.log("----- questão 4 -----");
console.log("a)  1, 3, 5, 7, 9");
console.log("b)  2, 4, 8, 16, 32, 64, 128");
console.log("c)   0, 1, 4, 9, 16, 25, 36,49");
console.log("d)  4, 16, 36, 64,100 ");
console.log("e) 1, 1, 2, 3, 5, 8, 13 ");
console.log("f)  2,10, 12, 16, 17, 18, 19,20");


console.log("----- questão 5 -----");
console.log("É só ir ate as os interruptores acender uma ver a sala das lampadas depois voltar e acender o outro interruptor , o que estiver apagado vai ser mechida pelo interruptor 3")