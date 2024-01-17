const resultElement = document.getElementById("result");

//- chiedere all'utente con un prompt pari o dispari

let userChoice = prompt("scegli tra pari o dispari");

let numero = prompt("scegli un numero tra 1 e 5");

let computer = computerNumber();

console.log(numero);

console.log(computer);

let somma = sumNumber();

if (somma % 2 == 0) {
  console.log("la somma è pari");
  if (userChoice == "pari") {
    resultElement.innerHTML = "hai vinto";
  } else {
    resultElement.innerHTML = "hai perso";
  }
} else {
  console.log("la somma è dispari");
  if (userChoice == "dispari") {
    resultElement.innerHTML = "hai vinto";
  } else {
    resultElement.innerHTML = "hai perso";
  }
}
