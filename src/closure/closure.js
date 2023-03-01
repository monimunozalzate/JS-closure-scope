function greeting() {
    let userName = 'orcar';

    function displayUserName() {
        return `hello ${userName}`
    }
    return displayUserName;
}


const g = greeting();
console.log(g()); //retorna el resultado
console.log(g); //retorna la funct