let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById(("bnt1"));
let btn2 = document.getElementById(("bnt2"));
let btn3 = document.getElementById(("bnt3"));
let btn4 = document.getElementById(("bnt4"));

btn1.addEventListener("click", function (){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function (){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function (){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function (){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClick", function (){
    tg.sendData(item)
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p")

p.innerText = `$(tg.initDataUnsafe.user.first_name)
$(tg.initDataUnsafe.user.last_name)`;

usercard.appendChild(p);