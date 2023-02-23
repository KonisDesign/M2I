let stroke = 0;
let mysternumber = Math.floor(Math.random()* 50) + 1;

let input = document.getElementById("myinput");

input.addEventListener("keypress", function(event) {
  
  if (event.key === "Enter") {
    check();
  }
});

function check() {
    stroke++;
    document.getElementById("stroke").innerHTML = "Nombre de coups : " + stroke;
    let myanswer = document.getElementById('myinput').value;
    document.getElementById("myinput").value = "";
    if (myanswer == mysternumber) {
        document.getElementById('first').innerHTML = "Bravo...! ! ! Vous avez trouvé en " + stroke + " coups!";
        document.getElementById('second').innerHTML = "Le nombre mystère était " + mysternumber;
        document.getElementById("check").disabled = true;
        document.getElementById("myinput").disabled = true;
    } else if (myanswer < mysternumber && myanswer > 0) {
        document.getElementById('first').innerHTML = "Le nombre mystère est plus grand que " + myanswer;
    } else if (myanswer > mysternumber && myanswer <= 50) {
        document.getElementById('first').innerHTML = "Le nombre mystère est plus petit que " + myanswer;
    } else {
        document.getElementById('first').innerHTML = "Veuillez écrire un nombre entre 1 et 50";
    }
}