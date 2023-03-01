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