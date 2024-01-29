let age;
let km;
let amount;

function inviaDati() {
    
    age = document.getElementById(`age`).value;
    km = document.getElementById(`km`).value;

    age = parseInt(age);
    km = parseInt(km);

    console.log(age);
    console.log(km);

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

    return false;

}