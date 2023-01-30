let result = "";

function helloWorld() {
    result = "";
    for (let i = 0; i < 9; i++) {
        result = result + 'Hello Wolrd!<br>';
    }
    document.getElementById("boucles").innerHTML = result;
}

function countdown() {
    result = "";
    for (let i = 100; i > 89; i--) {
        result = result + i + '<br>';
    }
    document.getElementById("boucles").innerHTML = result;
}

function county() {
    result = "";
    for (let i = 1; i < 21; i++) {
        if (i > 0 && i <= 9) {
            result = result + '7500' + i + '<br>';
        } else {
            result = result + '750' + i + '<br>';
        }
    }
    document.getElementById("boucles").innerHTML = result;
}

function county77() {
    result = "";
    fetch('77.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 800; i++) {
                let mydata = data[i].Code_postal;
                let str = mydata.toString();
                if (str.substring(0, 1) == '7') {
                    result = result + str + "<br>";
                    document.getElementById("boucles").innerHTML = result;
                } else {

                }
            }

        })
        .catch(error => {
            console.error('Error:', error);
        });

}
