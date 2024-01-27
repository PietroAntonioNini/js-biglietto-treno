let amount;
let age;
let km;

while (true) {

    age = prompt("Quanti anni hai?");

    if (isNaN(age) && age === null || age.trim() === "") {
        alert("Il campo non può essere vuoto o devi inserire un numero valido!!");
        console.log(age);
        
    } else {
        break;
    }
}

while (true) {

    km = prompt("Quanti kilometri devi percorrere?");

    if (isNaN(km) && km === null || km.trim() === "") {
        alert("Il campo non può essere vuoto o devi inserire un numero valido!!");
        console.log(km);
        
    } else {
        break;
    }
}

    amount = Math.floor(km) * 0.21;
    console.log(amount);

if (age < 18) {
    amount = `${amount}` - ((`${amount}` * 20) / 100);
    amount = amount.toFixed(2);
    console.log(price);

} 
else if (age >= 65) {
    amount = `${amount}` - ((`${amount}` * 40) / 100);
    amount = amount.toFixed(2);
    console.log(price);


} else {
    amount = amount.toFixed(2);
}

document.getElementById("price").innerHTML = `${amount} €`;
document.getElementById("price-shadow").innerHTML = `${amount} €`;

document.getElementById("Age").innerHTML = age
document.getElementById("Km").innerHTML = km

