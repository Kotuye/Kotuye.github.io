
/*Megrendelés összegének kiszámítása.


menyiség input megkeresése a dokumentumban
document.querySelector("input[name='amount-input']");

létrehozom ---menyiség input megkeresése a dokumentumban--
let amountInput = document.querySelector("input[name='amount-input']");

mennyiség létrehozása
let amount = 0;

menyiség kiolvasása
amountInput.value

Egységár
let price = 1200;

Kiszámítás
amount = parseInt(amountInput.value) * price;
alul a létrehozott fügvény
*/
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}
function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

}

// Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);

// Windows event.
let sendButton = document.querySelector("form .btn.btn-primary");
/*sendButton.onclick = function() {
    alert("Hello Js!");
}
*/

sendButton.addEventListener("click", function(){
    alert("Hello Js!");
});
/*
window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});*/
// Űrlap események.
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
   
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values);
});

// Parent elem kezelése.
/*let alertCoseButtons = document.querySelectorAll('.close[data-dismiss="alert"]');
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", function(ev){
        console.log( ev );
    });
}*/

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display ="none";
};
for (let i = 0; i< alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

// select elem kitöltése.
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}









// Clean Code - A tiszta kód szabályai.

// Nevek
// egyértelmű nevek

// Ne legyen a név félrevezető

// Kerüld az O és I karakteleket

// Komment:  ami egy soros

// Közvetlenül a változó előtti sorba írlyuk a kommentet.

// Feleslegesen ne kommentelj.

// A fontosabb részek között kihagyok egy sort

// A fügvény ideális hossza 4-6 sor, 10 sortól már ajánlott ketté osztani.

// A fügvény nevénél igét használok: mit csinál?

// háromnál több input adat ne legyen egy fügvénynél, nem előnyös.

// Olyan kódot írj, amit ha olvasnak, mintha mondatokat olvasnának.