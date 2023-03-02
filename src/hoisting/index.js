//hoisting: 'elevar', cuando se crea una var luego de ser llamada, 
//el navegador por default la declara y asigna el valor de default

console.log(nameOfDog); //muestra el valor undefined
var nameOfDog = 'elmo';
console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`el mejor perrito es: ${elmo}`); //elmo = default
}
var elmo = 'elmito';