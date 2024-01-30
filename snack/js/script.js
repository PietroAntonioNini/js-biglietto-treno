
// BOTTONI PER ATTIVARE VARI PROGRAMMI

    function mostraForm1() {
        document.getElementById("card-title").style.display = `none`
        document.getElementById("myForm1").style.display = `block`
        document.getElementById("myForm2").style.display = `none`
        document.getElementById("myForm3").style.display = `none`
    }

    function mostraForm2() {
        document.getElementById("card-title").style.display = `none`
        document.getElementById("myForm1").style.display = `none`
        document.getElementById("myForm2").style.display = `block`
        document.getElementById("myForm3").style.display = `none`
    }

    function mostraForm3() {
        document.getElementById("card-title").style.display = `none`
        document.getElementById("myForm1").style.display = `none`
        document.getElementById("myForm2").style.display = `none`
        document.getElementById("myForm3").style.display = `block`
    }


// TEMPERATURE PROGRAM

const tempBox = document.getElementById("tempBox");
const Fahrenheit = document.getElementById("Fahrenheit");
const Celsius = document.getElementById("Celsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if(Fahrenheit.checked) {
        temp = Number(tempBox.value);
        temp = temp * 9 / 5 + 32;
        document.getElementById("result").innerHTML = temp.toFixed(1) + "°F";
    }
    else if(Celsius.checked) {
        temp = Number(tempBox.value);
        temp = (temp - 32) * (5 / 9);
        document.getElementById("result").innerHTML = temp.toFixed(1) + "°C";

    } else {
        document.getElementById("result").innerHTML = "Seleziona un unità!";
    }
}

function svuotaCampi1() {
    document.getElementById("tempBox").value = "0"

    const radioFahrenheit = document.getElementById("Fahrenheit");
    const radioCelsius = document.getElementById("Celsius");
    radioFahrenheit.checked = false;
    radioCelsius.checked = false;

    document.getElementById("result").innerHTML = ""

}

//FINE




// MEDIA ARITMETICA PROGRAM

let num1;
let num2;
let num3;
let media;

num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");

function calc() {

    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);

    if(num1 === 0 || num2 === 0 || num3 === 0) {
        document.getElementById("media").innerHTML = "Non lasciare i campi vuoti!";

    } else {
        media = (num1 + num2 + num3) / 3;
        document.getElementById("media").innerHTML = media.toFixed(1);
    }
}

function svuotaCampi2() {
    document.getElementById("num1").value = "0"
    document.getElementById("num2").value = "0"
    document.getElementById("num3").value = "0"
    document.getElementById("media").innerHTML = ""

    
}

//FINE




// CARTA, FORBICE, SASSO PROGRAM

let paper;
let rock;
let scissor;
let number;
let match;
let matchResult;

function Paper() {

    paper = 1
    number = Math.floor (Math.random() * 3) + 1;

    if(number === 1) {
        document.getElementById("match").innerHTML = "E' uscita Carta:"
        document.getElementById("matchResult").innerHTML = "🥹 E' un pareggio 🥹"
    }
    else if(number === 2) {
        document.getElementById("match").innerHTML = "E' uscito Sasso:"
        document.getElementById("matchResult").innerHTML = "🎉 Hai vinto!! 🎉"

    } else {
        document.getElementById("match").innerHTML = "E' uscita Forbice:"
        document.getElementById("matchResult").innerHTML = "😭 Hai perso 😭"
    }
}

function Rock() {

    rock = 2
    number = Math.floor (Math.random() * 3) + 1;

    if(number === 1) {
        document.getElementById("match").innerHTML = "E' uscita Carta"
        document.getElementById("matchResult").innerHTML = "😭 Hai perso 😭"
    }
    else if(number === 2) {
        document.getElementById("match").innerHTML = "E' uscito Sasso:"
        document.getElementById("matchResult").innerHTML = "🥹 E' un pareggio 🥹"

    } else {
        document.getElementById("match").innerHTML = "E' uscita Forbice:"
        document.getElementById("matchResult").innerHTML = "🎉 Hai vinto!! 🎉"
    }
}

function Scissor() {

    scissor = 3
    number = Math.floor (Math.random() * 3) + 1;

    if(number === 1) {
        document.getElementById("match").innerHTML = "E' uscita Carta:"
        document.getElementById("matchResult").innerHTML = "🎉 Hai vinto!! 🎉"
    }
    else if(number === 2) {
        document.getElementById("match").innerHTML = "E' uscito Sasso:"
        document.getElementById("matchResult").innerHTML = "😭 Hai perso 😭"

    } else {
        document.getElementById("match").innerHTML = "E' uscita Forbice:"
        document.getElementById("matchResult").innerHTML = "🥹 E' un pareggio 🥹"
    }
}

function svuotaCampi3() {
    document.getElementById("match").innerHTML = ""
    document.getElementById("matchResult").innerHTML = ""
}

//FINE