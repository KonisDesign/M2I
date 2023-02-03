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
    document.getElementById("usersold").innerHTML = "Sold (€): " + sold;
    if (decouvert == 0) {
        document.getElementById("overdraft").innerHTML = "Overdraft: not allowed";
    } else {
        document.getElementById("overdraft").innerHTML = "Overdraft (€): " + decouvert;
    }
    
    if (sold < 0) {
        document.getElementById("agios-button").style.display = "block";
    }

    document.getElementById("title").innerHTML = "Hi, " + nameuser;
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
    nameuser = prompt("Please enter your first and last name");
    let undecouvert = prompt("Do you want to have an overdraft?");
    if (undecouvert == "y" || undecouvert == "Y") {
        tasks.push(getdate() + ": Adding an overdraft");
        while (decouvert > 2000 || decouvert < 100) {
            decouvert = Number(prompt("Enter the amount of your authorized overdraft"));
            save("mydecouvert", decouvert);
        }
        document.getElementById("overdraft").innerHTML = "Overdraft (€): " + decouvert;
        tasks.push(getdate() + ": Authorized overdraft amount: " + decouvert + "€");
    } else {
        document.getElementById("overdraft").innerHTML = "Overdraft: not allowed";
        tasks.push(getdate() + ": Overdraft: not allowed");
    }
    while (sold < 500) {
        sold = Number(prompt("Enter the deposit"));
    }
    tasks.push(getdate() + ": Deposit of " + sold + "€");
    document.getElementById("usersold").innerHTML = "Sold (€): " + sold;
    document.getElementById("title").innerHTML = "Hi, " + nameuser;
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
        mydeposit = Number(prompt("Enter the deposit amount"));
    }
    sold += mydeposit;
    document.getElementById("usersold").innerHTML = "Sold (€): " + sold;
    tasks.push(getdate() + ": Deposit of " + mydeposit + "€");
    tasks.push(getdate() + ": Remaining balance: " + sold + "€");
    if (sold < 0) {
        tasks.push(getdate() + ": You are overdrawn");
    }
    readtab();
    save("mysold", sold);
}

function withdraw() {
    document.getElementById("show").innerHTML = "";
    let withdraw = Number(prompt("Enter the withdrawal amount"));
    let check = sold + decouvert - withdraw;
    if (check >= 0) {
        sold = sold - withdraw;
        document.getElementById("usersold").innerHTML = "Solde (€): " + sold;
        tasks.push(getdate() + ": Withdrawal of " + withdraw + "€");
        tasks.push(getdate() + ": Remaining balance: " + sold + "€");
    }
    else {
        document.getElementById("show").innerHTML = "Insufficient balance";
    }

    if (sold < 0) {
        document.getElementById("agios-button").style.display = "block";
        tasks.push(getdate() + ": You are overdrawn");
    }
    readtab();
    save("mysold", sold);
}

function agios() {
    document.getElementById("show").innerHTML = "";
    let day = 0;
    while (day <= 0 || day > 365) {
        day = Number(prompt("Enter the number of days"));
    }
    let result = (sold * -1) * day * 0.1 / 365;
    tasks.push(getdate() + ": On " + day + " day(s) you have " + result.toFixed(2) + "€ of bank interest");
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
    today = "<b>" + mm + "/" + dd + "/" + yyyy + "</b>";
    return today;
}

function save(myid, myvalue) {
    localStorage.setItem(myid, myvalue);
}

function signout() {
    localStorage.clear();
    location.reload();
}