export class impot {
    ask() {
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
}

export class consonne {
    ask() {
        let text = prompt("Écrivez une phrase").split("");
        let consonants = "zrtpqsdfghjklmwxcvbn".split("");
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            for (let c = 0; c < consonants.length; c++) {
                if (text[i] == consonants[c]) {
                    count++;
                }
            }
        }
        document.getElementById("show").innerHTML = count + " Consonnes";
    }
}

export class swap {
    ask() {
        let a = Number(prompt("Saisissez un nombre A"));
        let b = Number(prompt("Saisissez un nombre B"));
        let c = 0;
        c = a;
        a = b;
        b = c;
        document.getElementById("show").innerHTML = "A = " + a + " B = " + b;
    }
}

export class palindrome {
    ask() {
        let text = prompt("Entrez un mot");
        let text2 = text.split('').reverse().join('');
        if (text == text2) {
            document.getElementById("show").innerHTML = "C'est un palindrome";
        } else {
            document.getElementById("show").innerHTML = "Ce n'est pas un palindrome";
        }
    }
}

export class bignumber {
    ask() {
        let text = prompt("Entrez plusieurs nombres").split(" ");
        let bigger = 0;
        for (let i = 0; i < text.length; i++) {
            if (Number(text[i]) > bigger) {
                bigger = Number(text[i]);
            }
        }
        document.getElementById("show").innerHTML = "Le plus grand nombre est " + bigger;
    }
}

export class bigword {
    ask() {
        let text = prompt("Entrez une phrase").split(" ");
        let bigger = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i].length > bigger.length) {
                bigger = text[i];
            }
        }
        document.getElementById("show").innerHTML = "Le mot le plus long est " + bigger;
    }
}

export class sizeword {
    small() {
        let text = prompt("Entrez une phrase").split(" ");
        let smaller = "azertyuiopqsdfghjklmwxcvbn";
        for (let i = 0; i < text.length; i++) {
            if (text[i].length < smaller.length) {
                smaller = text[i];
            }
        }
        document.getElementById("show").innerHTML = "La taille du mot le plus court est " + smaller.length;
    }

    big() {
        let text = prompt("Entrez une phrase").split(" ");
        let bigger = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i].length > bigger.length) {
                bigger = text[i];
            }
        }
        document.getElementById("show").innerHTML = "La taille du mot le plus long est " + bigger.length;
    }
}

export class maxtab {
    ask() {
        let numbers = "";
        let result = [];
        while (42) {
            let numbers = prompt("Entrez les nombres pour un tableau (q pour quitter)");
            if (numbers == "q") {
                break;
            }
            numbers = numbers.split(" ");
            let check = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (Number(numbers[i]) > check) {
                    check = Number(numbers[i]);
                }
            }
            result.push(check);
        }
        document.getElementById("show").innerHTML = "Les nombres les plus élevés sont: " + result;
    }
}