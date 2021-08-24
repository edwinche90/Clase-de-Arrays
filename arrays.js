let frutas2 = [];
console.log(frutas2);

let contar_ejecuciones = 0;
//INDEX ->       0        1        2      3 
// TAMAÑO ARRAY ->  4
let frutas = ["Manzana","Banano","Pera", "Durazno"];
console.log(frutas);


//PRIMER EJEMPLO  RECORRER UN ARRAY
//definicion VA   Condicion VA (if)       aumento de VA   
for(let index = 0; index < frutas.length; index++){
    let fruta = frutas [index ]; 
    console.log(fruta);
}
i = 0 ->  frutas[0]
i = 1 ->  frutas[1]
i = 2 ->  frutas[2]
i = 3 ->  frutas[3]
frutas.forEach(function(element,indice){
    console.log(element,indice);
})


//SEGUNDO EJEMPLO RECORRER UN ARRAY
console.log("Top 2 frutas favoritas !!!!!!!!!");
for(let index = 0; index < 2; index++){
    let fruta = frutas [index ]; 
    console.log(fruta);
    contar_ejecuciones++;
}
console.log(contar_ejecuciones);

console.log("Top 2 frutas avoritas for each!!!!!!!");
contar_ejecuciones = 0;
frutas.forEach(function(element,indice){
    if(indice<2){
        console.log(element);
    }
    contar_ejecuciones++;
})*
console.log(contar_ejecuciones);


//AÑADIR UN ALEMENTO AL FINAL 
frutas.push("Naranja");
frutas.push("Piña");
frutas.push("Melon");


//RECORRER UN ARRAY
//              forma de reemplazar la palabra funcion       
frutas.forEach((element) => {
    console.log (element);
})
printFrutas ("imprimir todo el array")
let ultimoElemento = frutas.pop();
printFrutas ("imprimir el array con un pop")
console.log(`imprimir el ultimo valor de array almacenado en el ultimoElemento ${ultimoElemento}`);
frutas.pop()
printFrutas("imprimir el array con el segundo pop")*/


//ELIMINAR EL PRIMER ELEMENTO
frutas.unshift("Mango")
printFrutas("Agregar  fruta al inicio");
let primerValor= frutas.shift();
printFrutas("sacar fruta al inicio");
console.log(primerValor);

function printFrutas (text){
    console.log(text);
    frutas.forEach((element) => {
        console.log (element);
    })
}

//ENCONTRAR EL INDICE DE UN ELEMENTO
frutas.unshift("Mango")
printFrutas("Agregar  fruta al inicio");
let index = frutas.indexOf("Naranja");
console.log(`index de naranja ${index}`);

function printFrutas (text){
    console.log(text);
    frutas.forEach((element) => {
        console.log (element);
    })
}


//SACAR DE NUESTRO ARRAY POR EL INDICE
frutas.unshift("Mango")
printFrutas("Agregar  fruta al inicio");
let index = frutas.splice(frutas.indexOf("Naranja"), 1);
console.log(`elemento elimindado de array ${index}`);
printFrutas("nuevo array");

function printFrutas (text){
    console.log(text);
    frutas.forEach((element) => {
        console.log (element);
    })
}