function impot() {
    let age = prompt("Quel âge avez-vous ?");
    let genre = prompt("Êtes-vous un homme ? Une femme ? (h/f)");
    let result = "";
    if (genre == "h" && age >= 20) {
        result = "Vous payez des impôts";
    } else if (genre == "f" && age >= 18 && age <= 35) {
        result = "Vous payez des impôts";
    }
    else {
        result = "Vous ne payez pas d'impôts";
    }
    document.getElementById("show").innerHTML = result;
}

