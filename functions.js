//- chiedere con un prompt di inserire una parola
//- invertire la parola con un ciclo for
//    - salvare la parola invertita in un altra variabile
//- ritorna la parola invertita
//- verificare se le parole sono ugali se si stamapre palindroma se no stampare non palindroma

function askWord() {
  //- invertire la parola con un ciclo for
  let reverseWord = "";
  for (let i = userWord.length - 1; i >= 0; i--) {
    reverseWord += userWord[i];
  }

  console.log(reverseWord);

  //- ritorna la parola invertita
  return reverseWord;
}
