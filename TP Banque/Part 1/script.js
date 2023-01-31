function agios() {
    let decouvert = 0;
    while (decouvert > 2000 || decouvert < 100) {
        decouvert = Number(prompt("Entrez le montant de votre découvert autorisé"));
        if (decouvert == 0) {
            break;
        }
    }
    if (decouvert == 0) {
        document.getElementById("show").innerHTML = "Découvert non autorisé, pas d'agios";
    } else {
        let day = 0;
        while (day <= 0 || day > 365) {
            day = Number(prompt("Entrez le nombre de jour"));
        }
        let result = decouvert * day * 0.1 / 365;
        document.getElementById("show").innerHTML = "Agios: " + result.toFixed(2);
    }
}