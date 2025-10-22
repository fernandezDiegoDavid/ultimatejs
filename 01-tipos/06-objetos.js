// tipo de referencia

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: nombre, // clave: valor
    anime: anime,
    edad: edad,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);
console.log(personaje["edad"]);

personaje.edad = 17; // modificar el valor de una clave
personaje['edad'] = 18; // modificar el valor de una clave
delete personaje.anime; // eliminar una clave
console.log(personaje);
console.log(personaje.edad);
