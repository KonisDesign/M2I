let sizetitle = 0;
let sizeparaph = 0;

function backgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}

function changeText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function changeTextSize(id, size) {
    document.getElementById(id).style.fontSize = size + "px";
}

function getOptionValue(textid, optionid) {
    document.getElementById(textid).style.textAlign = document.getElementById(optionid).value;
}

function changeFont(textid, optionid) {
    document.getElementById(textid).style.fontFamily = document.getElementById(optionid).value;
}

function changeImage(link) {
    document.getElementById('imageArticle').src = link;
}

function upsize() {
    if (sizetitle < 71) {
        sizetitle = document.getElementById('titlesize').value++;
        changeTextSize('title', sizetitle);
    }

    if (sizeparaph < 35) {
        sizeparaph = document.getElementById('paraphsize').value++;
        changeTextSize('paraph', sizeparaph);
    }
}

function downsize() {
    if (sizetitle > 37) {
        sizetitle = document.getElementById('titlesize').value--;
        changeTextSize('title', sizetitle);
    }

    if (sizeparaph > 13) {
        sizeparaph = document.getElementById('paraphsize').value--;
        changeTextSize('paraph', sizeparaph);
    }
}