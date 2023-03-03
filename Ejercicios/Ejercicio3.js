
const esPar = ( valor ) => {
    if(valor%2==0){
        return `El numero ${valor} es par`;
    }
    return `El numero ${valor} es impar`;
}

module.exports = esPar;