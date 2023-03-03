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
const ejercicio10 = require("./Ejercicios/Ejercicio10");
const ejercicio11 = require("./Ejercicios/Ejercicio11");
const ejercicio12 = require("./Ejercicios/Ejercicio12");
const ejercicio13 = require("./Ejercicios/Ejercicio13");
const ejercicio14 = require("./Ejercicios/Ejercicio14");
const ejercicio15 = require("./Ejercicios/Ejercicio15");
const ejercicio16 = require("./Ejercicios/Ejercicio16");
const ejercicio17 = require("./Ejercicios/Ejercicio17");
const ejercicio18 = require("./Ejercicios/Ejercicio18");
const ejercicio19 = require("./Ejercicios/Ejercicio19");
const ejercicio20 = require("./Ejercicios/Ejercicio20");


// ejercicio1("Ejercicio 1");

const [ , , arg3] = process.argv;

if(arg3===true){
    ejercicio2(arg3);    
}

if(typeof arg3 === 'undefined'){
  } else {
    console.log(ejercicio3(arg3));
  }

// ejercicio4();

// ejercicio5();

// ejercicio6();

// Servidor simple
// ejercicio7();

// ejercicio8();

// ejercicio9();

// ejercicio10();

// ejercicio11();

// ejercicio12();

// ejercicio13();

// ejercicio14();

// ejercicio15();

// ejercicio16();

// ejercicio17();

// ejercicio18();

// ejercicio19();

ejercicio20();