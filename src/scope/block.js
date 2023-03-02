function fruits() {
    //bloque: casi cualquier cosa que este dentro de {}
    if (true) {
        var fruit1 = 'apple'; //function scooe
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'banana'; //block scope
    }
}
nameOfDog("Elmo");

function nameOfDog(name) {
    console.log(name);
};