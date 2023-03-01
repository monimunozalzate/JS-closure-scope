//ambito lexico = accesibilidad de las var determinada por la posicion d elas mismas segun como esten anidadas

const myGlobal = 0;

function myFuction() {
    const number = 1;
    console.log(myGlobal);

    function parent() { //function interna
        const inner = 2;
        console.log(number, myGlobal);

        function child() {
            console.log(inner, number, myGlobal);
        }
        return child();
    }
    return parent();
}

myFuction();

//ejercicio
//En este desafío recibirás dos números aleatorios por parámetros.
// Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:
// La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

// Input:
//     sumWithClosure(2)(3);
// Output:
//     5
function sumWithClosure(firstNum) {
    // Tu código aquí 👈 
    function plus(secondNum) {
        if (secondNum !== undefined) {
            return firstNum + secondNum;
        } else {
            return firstNum;
        }
    }
    return plus;
}
sumWithClosure(2)(3);