const resultElement = document.getElementById("result");

//- chiedere con un prompt di inserire una parola
let userWord = prompt("scrivi una parola");

//- verificare se le parole sono ugali se si stamapre palindroma se no stampare non palindroma

let reverseWord = askWord();
if (userWord == reverseWord) {
  resultElement.innerHTML = "palindroma";
} else if (userWord != reverseWord) {
  resultElement.innerHTML = "non palindroma";
}
