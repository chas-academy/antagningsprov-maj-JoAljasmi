

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

  
}

function sort (numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            console.log(numbers[i] + " jämnt");
        }
        else{
            console.log(numbers[i] + " udda");
        }
    }
}
sort([5,4,3,2,65,90]);
module.exports = { uppg9 };