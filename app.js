const argv = require("yargs").argv;
const { exit } = require("yargs");
const ejercicio1 = require("./Ejercicios/Ejercicio1");
const ejercicio2 = require("./Ejercicios/Ejercicio2");
const ejercicio3 = require("./Ejercicios/Ejercicio3");
const ejercicio4 = require("./Ejercicios/Ejercicio4");
const ejercicio5 = require("./Ejercicios/Ejercicio5");
const ejercicio6 = require("./Ejercicios/Ejercicio6");
const ejercicio7 = require("./Ejercicios/Ejercicio7");
const ejercicio8 = require("./Ejercicios/Ejercicio8");
const ejercicio9 = require("./Ejercicios/Ejercicio9");

ejercicio1("Ejercicio 1");

const [ , , arg3] = process.argv;

if(arg3===true){
    ejercicio2(arg3);    
}

if(typeof arg3 === 'undefined'){
  } else {
    console.log(ejercicio3(arg3));
  }

// ejercicio4();

ejercicio5();

ejercicio6();

// Servidor simple
// ejercicio7();

ejercicio8();

ejercicio9();