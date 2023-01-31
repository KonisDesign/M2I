function agios() {
    let decouvert = 0;
    while (decouvert > 2000 || decouvert < 100) {
        decouvert = Number(prompt("Entrez le montant de votre découvert"));
    }
    let day = Number(prompt("Entrez le nombre de jour"));
    let result = decouvert * day * 0.1 / 365;
    document.getElementById("show").innerHTML = "Agios: " + result.toFixed(2);
}