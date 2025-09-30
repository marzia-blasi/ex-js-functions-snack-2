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

function creaTimer(ms) {
  return () => setTimeout(tempoScaduto, ms);
}

const timer1 = creaTimer(5000);
const timer2 = creaTimer(2000);
timer1();
timer2();

// 🏆 Snack 5 Crea una funzione stampaOgniSecondo con setInterval.

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function saluto(text) {
  const int = setInterval(() => {
    console.log(text);
  }, 1000);

  setTimeout(() => {
    clearInterval(int);
    console.log("fine");
  }, 6000);
}

saluto("ciaooooo Pippo");

// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
/*
function creaContatoreAutomatico(intervallo) {
  let contatore = 0;

  return () => {
    setInterval(() => {
      contatore++;
      console.log(contatore);
    }, intervallo);
  };
}

const cont = creaContatoreAutomatico(1000);

cont();
*/

// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
  const intervallo = setInterval(() => {
    console.log(messaggio);
  }, tempoAvvio);
  const stop = setTimeout(() => {
    clearInterval(intervallo);
  }, tempoStop);
}

eseguiEferma("ciao", 1000, 6000);

// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// Esempio di utilizzo:
// contoAllaRovescia(5)
// Output atteso:
// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!

// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);
// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3
