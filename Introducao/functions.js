// Funções
    //Funções Nativas
function calc (n1, n2, operador)
{
    return eval(`${n1} ${operador} ${n2}`);
}

let resultadoCalc = calc(4,5,"*");

console.log (resultadoCalc);

    // Funções Anonimas
(function (n1, n2, operador)
{
    return eval(`${n1} ${operador} ${n2}`);

})(12,11,"-")

    //Arrow functions 
let calculo = (n1, n2, operador) => {
    return eval(`${n1} ${operador} ${n2}`);
}

// Eventos
window.addEventListener('focus', event => {
    console.log('Focus - event window');
});

document.addEventListener('click', event =>
{
    console.log('click - event document');

});