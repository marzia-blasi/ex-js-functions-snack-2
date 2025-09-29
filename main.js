// 🏆 Snack 1 Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(a, b) {
  return a + b;
}

console.log(somma(1, 1));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const somma1 = function (a, b) {
  return a + b;
};

console.log(somma1(2, 2));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma2 = (a, b) => a + b;
console.log(somma2(5, 5));

// 🏆 Snack 2 Crea una arrow function che calcola il quadrato di un numero.

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (a) => a * a;

console.log(quadrato(5));

// 🏆 Snack 3 Crea una funzione eseguiOperazione

// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// Esempio d’uso:
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;
//
// const eseguiOperazione = (a, b, operazione) => operazione(a, b);
//
// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12

const sottrazione = (a, b) => a - b;

const eseguiOperazione = (a, b, callback) => callback(a, b);

console.log(eseguiOperazione(5, 2, sottrazione));

// 🏆 Snack 4 Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!

function tempoScaduto() {
  console.log("Tempo scaduto");
}

function creaTimer() {
  setTimeout(tempoScaduto, 1000);
}

creaTimer();

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
