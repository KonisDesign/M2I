let decouvert = 0;
let sold = 0;
let tasks = [];
let nameuser = "";

try {
    decouvert = Number(localStorage.getItem("mydecouvert"));
    sold = Number(localStorage.getItem("mysold"));
    tasks = JSON.parse(localStorage.getItem("mytasks"));
    nameuser = localStorage.getItem("myname");
} catch {

}

if (sold != null && decouvert != null && tasks != null && nameuser != null) {
    document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
    if (decouvert == 0) {
        document.getElementById("overdraft").innerHTML = "Découvert: non autorisé";
    } else {
        document.getElementById("overdraft").innerHTML = "Découvert (€): " + decouvert;
    }
    
    document.getElementById("title").innerHTML = "Bonjour " + nameuser;
    document.getElementById("open-account-button").style.display = "none";
    document.getElementById("withdraw-button").style.display = "block";
    document.getElementById("deposit-button").style.display = "block";
    document.getElementById("signout-button").style.display = "block";
    document.getElementById("tasks-container").style.display = "flex";
    readtab();
} else {
    decouvert = 0;
    sold = 0;
    tasks = [];
}

function openaccount() {
    nameuser = prompt("Veuillez entrer votre nom et votre prénom");
    let undecouvert = prompt("Voulez-vous avoir un découvert ?");
    if (undecouvert == "y" || undecouvert == "Y") {
        tasks.push(getdate() + ": Ajout d'un découvert");
        while (decouvert > 2000 || decouvert < 100) {
            decouvert = Number(prompt("Entrez le montant de votre découvert autorisé"));
            save("mydecouvert", decouvert);
        }
        document.getElementById("overdraft").innerHTML = "Découvert (€): " + decouvert;
        tasks.push(getdate() + ": Montant du découvert autorisé: " + decouvert + "€");
    } else {
        document.getElementById("overdraft").innerHTML = "Découvert: non autorisé";
        tasks.push(getdate() + ": Pas de découvert autorisé");
    }
    while (sold < 500) {
        sold = Number(prompt("Saisissez le dépot"));
    }
    tasks.push(getdate() + ": Dépot de " + sold + "€");
    document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
    document.getElementById("title").innerHTML = "Bienvenue " + nameuser;
    document.getElementById("open-account-button").style.display = "none";
    document.getElementById("withdraw-button").style.display = "block";
    document.getElementById("deposit-button").style.display = "block";
    document.getElementById("signout-button").style.display = "block";
    document.getElementById("tasks-container").style.display = "flex";
    readtab();
    save("mysold", sold);
    save("myname", nameuser);
}

function mydeposit() {
    document.getElementById("show").innerHTML = "";
    let mydeposit = 0;
    while (mydeposit < 1) {
        mydeposit = Number(prompt("Saisissez le montant du dépôt"));
    }
    sold += mydeposit;
    document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
    tasks.push(getdate() + ": Dépôt de " + mydeposit + "€");
    tasks.push(getdate() + ": Solde restant: " + sold + "€");
    if (sold < 0) {
        tasks.push(getdate() + ": Vous êtes à découvert");
    }
    readtab();
    save("mysold", sold);
}

function withdraw() {
    document.getElementById("show").innerHTML = "";
    let withdraw = Number(prompt("Saisissez le montant du retrait"));
    let check = sold + decouvert - withdraw;
    if (check >= 0) {
        sold = sold - withdraw;
        document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
        tasks.push(getdate() + ": Retrait de " + withdraw + "€");
        tasks.push(getdate() + ": Solde restant: " + sold + "€");
    }
    else {
        document.getElementById("show").innerHTML = "Solde insuffisant";
    }

    if (sold < 0) {
        document.getElementById("agios-button").style.display = "block";
        tasks.push(getdate() + ": Vous êtes à découvert");
    }
    readtab();
    save("mysold", sold);
}

function agios() {
    document.getElementById("show").innerHTML = "";
    let day = 0;
    while (day <= 0 || day > 365) {
        day = Number(prompt("Entrez le nombre de jour"));
    }
    let result = (sold * -1) * day * 0.1 / 365;
    tasks.push(getdate() + ": Sur " + day + " Jour(s) vous avez " + result.toFixed(2) + "€ d'intérêts");
    document.getElementById("show").innerHTML = "Agios: " + result.toFixed(2);
    readtab();
}

function readtab() {
    let mytask = "";
    for (let i = 0; i < tasks.length; i++) {
        mytask = mytask + tasks[i] + "<br>";
        document.getElementById("tasks-show").innerHTML = "<br>" + mytask;
    }
    document.getElementById("tasks-show").scrollTop = document.getElementById("tasks-show").scrollHeight;
    localStorage.setItem("mytasks", JSON.stringify(tasks));
}

function getdate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = "<b>" + dd + "/" + mm + "/" + yyyy + "</b>";
    return today;
}

function save(myid, myvalue) {
    localStorage.setItem(myid, myvalue);
}

function signout() {
    localStorage.clear();
    location.reload();
}