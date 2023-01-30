let Lastname = prompt("Nom");
let Firstname = prompt("Prénom");
let Age = prompt("Age");
let MajMin;

if (Age < 18) {
  MajMin = "Vous êtes mineur.";
} else if (Age == "18") {
  MajMin = "Vous avez exactement 18 ans.";
} else {
  MajMin = "Vous êtes Majeur.";
}

document.getElementById("lastname").innerHTML =
  "Je m'appelle " +
  Lastname +
  " " +
  Firstname +
  " et j'ai " +
  Age +
  " ans.<br>" +
  MajMin;

function exercice3() {
  let number1 = prompt("Premier nombre");
  let number2 = prompt("Deuxième nombre");

  let addition = Number(number1) + Number(number2);
  let soustraction = Number(number1) - Number(number2);
  let multiplication = Number(number1) * Number(number2);
  let division = "";
  if (number2 != "0") {
    let divisionCalc = Number(number1) / Number(number2);
    division = "Division: " + number1 + " / " + number2 + " = " + divisionCalc;
  } else {
    division = "Division par 0 impossible.";
  }

  document.getElementById("exo3").innerHTML =
    "Addition: " +
    number1 +
    " + " +
    number2 +
    " = " +
    addition +
    "<br>Soustraction: " +
    number1 +
    " - " +
    number2 +
    " = " +
    soustraction +
    "<br>Multiplication: " +
    number1 +
    " x " +
    number2 +
    " = " +
    multiplication +
    "<br>" +
    division;
}

function exercice4() {
  let number100 = Number(prompt("Entrez un nombre entre 0 et 100"));
  if (number100 >= 0 && number100 <= 50) {
    document.getElementById("exo4").innerHTML = "Nombre compris entre 0 et 50";
  } else if (number100 >= 51 && number100 <= 75) {
    document.getElementById("exo4").innerHTML = "Nombre compris entre 51 et 75";
  } else {
    document.getElementById("exo4").innerHTML = "Nombre supérieur à 75 ou inférieur à 0";
  }
}


function exercice5() {
    let number10 = 50;
    while (number10 < 0 || number10 > 10) {
        number10 = Number(prompt("Saisissez un nombre compris en 0 et 10"));
    }
    document.getElementById("exo5").innerHTML = "Votre nombre est " + number10;
}

function exercice6() {
    let number100 = 101;
    let result = "";
    while (number100 < 0 || number100 > 100) {
        number100 = Number(prompt("Saisissez un nombre inférieur à 100"));
    }
    while (number100 != 101) {
        result = result + number100 + "<br>";
        number100++;
    }
    document.getElementById("exo6").innerHTML = result;
}

function exercice7() {
    let notes = [];
    let valuefromUser = 0;
    let result = 0;
    while (valuefromUser != -1) {
        valuefromUser = Number(prompt("Saisissez une note"));
        notes.push(valuefromUser);
    }
    notes.length--;
    for (let i = 0; i < notes.length; i++) {
        result = result + notes[i];
    }
    result = result / notes.length;
    document.getElementById("exo7").innerHTML = "La moyenne de la classe est de " + result;
}