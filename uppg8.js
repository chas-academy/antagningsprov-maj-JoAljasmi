
let people = [
    {name: 'Anna', age: 28},
    {name: 'daniel', age: 60},
    {name: 'sara', age: 40},
    {name: 'manny', age: 28},
    {name: 'jack', age: 20}
];

function uppg8(array){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

for(let i = 0; i<array.length; i++){
    if (array[i].age > 30) {
        console.log(array[i].name);
    }
}


}
uppg8(people)
module.exports = { uppg8 };