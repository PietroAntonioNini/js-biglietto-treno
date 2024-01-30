
//chiedo i kilometri da percorrere
const kmNumber = Number(prompt("Quanti kilometri devi percorrere?"));

let errorHappened = false;

if(isNaN(kmNumber) || kmNumber < 1) {
    alert("Hai inserito un valore errato, ricarica e inserisci di nuovo!")

    errorHappened = true;
}

//chiedo l'età
if(errorHappened == false) {

    const age =Number(prompt("Quanti anni hai?"));

    if(isNaN(age) || age < 0 || age > 122) {
    alert("Hai inserito un età errata, ricarica e inserisci di nuovo!")

    errorHappened = true;

    }
}

//prezzo in base ai kilometri
const basePrice = 0.21 * kmNumber;

//prezzo con eventuali sconti o no
let finalPrice = basePrice;

let discountMessage = "";

if(age < 18) {
    finalPrice = basePrice - basePrice * 0.2;
    discountMessage = " E' stato applicato uno sconto del 20% perchè sei minorenne.";

} else if(age >= 65) {
    finalPrice = basePrice - basePrice * 0.4;
    discountMessage = " E' stato applicato uno sconto del 40% perchè sei over 65.";
}

if(!errorHappened) {
    document.getElementById("price").innerHTML = "il prezzo del tuo biglietto è di € " + finalPrice.toFixed(2) + "<br>" + discountMessage;
}


