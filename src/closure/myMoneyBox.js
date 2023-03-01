function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`i got: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(20);
moneyBoxAna(20);
moneyBoxAna(20);

//agregar mascotas a lista
function createPetList() {

    let myPetList = [];

    function addToPetList(pet) {
        if (pet) {
            console.log(`mis mascotas son: ${pet}`)
            return myPetList.push(pet);

        } else {
            return myPetList;
        }
    }
    console.log(`lista mascotas ${myPetList}`)
    return addToPetList;
}

let misMascotas = createPetList();
misMascotas('gato');
misMascotas('alma');
misMascotas('perro');
misMascotas();