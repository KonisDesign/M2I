import { impot, consonne, swap, palindrome, bignumber, bigword, sizeword, maxtab } from './classes.js';
let myImpot = new impot();
let myConsonne = new consonne();
let mySwap = new swap();
let myPalindrome = new palindrome();
let myBignumber = new bignumber();
let myBigword = new bigword();
let mySizeword = new sizeword();
let myMaxtab = new maxtab();


document.getElementById("button").addEventListener("click", function () {
    myImpot.ask();
});

document.getElementById("button2").addEventListener("click", function () {
    myConsonne.ask();
});

document.getElementById("button3").addEventListener("click", function () {
    mySwap.ask();
});

document.getElementById("button4").addEventListener("click", function () {
    myPalindrome.ask();
});

document.getElementById("button5").addEventListener("click", function () {
    myBignumber.ask();
});

document.getElementById("button6").addEventListener("click", function () {
    myBigword.ask();
});

document.getElementById("button7").addEventListener("click", function () {
    mySizeword.small();
});

document.getElementById("button8").addEventListener("click", function () {
    mySizeword.big();
});

document.getElementById("button9").addEventListener("click", function () {
    myMaxtab.ask();
});