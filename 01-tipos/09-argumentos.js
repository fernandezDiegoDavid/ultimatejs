function sumar(a,b) {
    console.log(arguments);
    return b + a;
}

let resultado = sumar(3,6,5,8);
console.log(resultado);
console.log(`El resultado de la suma es: ${resultado}`);
console.log(typeof sumar); // function
