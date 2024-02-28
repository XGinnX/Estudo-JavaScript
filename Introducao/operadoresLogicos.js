//Atribuição
let texto = '10';
const numbers = 10;
var boolean = true;

//comparacao de valor
console.log(texto == numbers);

//Comparacao de valor e igualdades
console.log(texto === numbers)

//comparacao diferente de valor e igualdades
console.log(texto !== numbers)

// Operadores lógicos
// AND 
console.log(texto == numbers && typeof texto == 'string')

// OR
console.log(texto == numbers || typeof numbers == 'string')


// IF, IF-ELSE, ELSE
let cor = 'verde';

if (cor === 'verde') {
    console.log('Siga')
} else if (cor === 'amarelo') {
    console.log('atenção');
} else if (cor === 'vermelho') {
    console.log('pare');
}

//Switch 
let color = 'preto';

switch (color) {
    case "verde":
        console.log("Verde é a cor do dinheiro");
        break;
    case "vermelho":
        console.log("Vermelho é a cor do coração");
        break;
    case "amarelo":
        console.log("Amarelo é a cor do sol");
        break;
    case "azul":
        console.log("Azul é a cor do mar");
        break;
    default:
        console.log("Não reconheço essa cor");
}

//Laço de repetição
let contadorFor = 5;
//for
for (let i = 0; i <= 10; i++){
    console.log(`${i} X ${contadorFor} = ${i*contadorFor}`);
    // Template String = '${i}' = Tudo que fica dentro desse bloco executa como código
}
//for each
const contadorForeach = 8;
const array = Array.from({ length: 11 }, (_, i) => i); // Cria um array de 0 a 10

array.forEach(i => {
    console.log(`${i} X ${contadorForeach} = ${i * contadorForeach}`);
});

//while
const contadorwhile = 10;

let i = 0;
while (i <= 10) {
    console.log(`${i} X ${contadorwhile} = ${i * contadorwhile}`);
    i++;
}
