let decouvert = 0;
let deposit = 0;
let sold = 0;

function openaccount() {
    let undecouvert = prompt("Voulez-vous avoir un découvert ?");
    if (undecouvert == "y" || undecouvert == "Y") {
        while (decouvert > 2000 || decouvert < 100) {
            decouvert = Number(prompt("Entrez le montant de votre découvert autorisé"));
        }
        document.getElementById("overdraft").innerHTML = "Découvert (€): " + decouvert;
    } else {
        document.getElementById("overdraft").innerHTML = "Découvert: non autorisé";
    }
    while (sold < 500) {
        sold = Number(prompt("Saisissez le dépot"));
    }
    document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
    document.getElementById("open-account-button").style.display = "none";
    document.getElementById("withdraw-button").style.display = "block";
}

function withdraw() {
    document.getElementById("show").innerHTML = "";
    let withdraw = Number(prompt("Saisissez le montant du retrait"));
    let check = sold + decouvert - withdraw;
    if (check >= 0) {
        sold = sold - withdraw;
        document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
    }
    else {
        document.getElementById("show").innerHTML = "Solde insuffisant";
    }

    if (sold < 0) {
        document.getElementById("agios-button").style.display = "block";
    }
}

function agios() {
    document.getElementById("show").innerHTML = "";
    let day = 0;
    while (day <= 0 || day > 365) {
        day = Number(prompt("Entrez le nombre de jour"));
    }
    let result = (sold * -1) * day * 0.1 / 365;
    document.getElementById("show").innerHTML = "Agios: " + result.toFixed(2);
}