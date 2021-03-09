// declaração de função
function soma (x,y){
    return x + y;
}

// expressao de função
const somaC = function (x, y){
    return x + y;
}

// função arrow
const somaA = (x, y) => x + y;

console.log(soma(1, 2));
console.log(somaC(5, 5));
console.log(somaA(25, 3));