/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++){
    console.log (pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();

console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.reverse());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primoElemento = pets.shift();
pets.push(primoElemento);

console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'BAGA';
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const nuovoAuto = {
  brand: 'Tesla',
  model: 'Model 3',
  color: 'white',
  trims: ['standard', 'long range', 'performance'],
};
cars.push(nuovoAuto);

for (let i = 0; i < cars.length; i++) {
  const auto = cars[i];
  auto.trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const firstTrim = cars[i].trims[0];
  justTrims.push(firstTrim);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color.charAt(0);
  if (firstLetter.toLowerCase() === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while (numericArray[i] !== 32 && i < numericArray.length) {
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const positionsArray = [];

for (let i = 0; i < charactersArray.length; i++) {
    switch (charactersArray[i]) {
      case 'a':
          positionsArray[i] = 1;
          break;
      case 'b':
        positionsArray[i] = 2;
          break;
      case 'c':
        positionsArray[i] = 3;
          break;
      case 'd':
        positionsArray[i] = 4;
          break;
      case 'e':
        positionsArray[i] = 5;
          break;
      case 'f':
        positionsArray[i] = 6;
          break;
      case 'g':
        positionsArray[i] = 7;
          break;
      case 'h':
        positionsArray[i] = 8;
          break;
      case 'i':
        positionsArray[i] = 9;
          break;
      case 'j':
        positionsArray[i] = 10;
          break;
      case 'k':
        positionsArray[i] = 11;
          break;
      case 'l':
        positionsArray[i] = 12;
          break;
      case 'm':
        positionsArray[i] = 13;
          break;
      case 'n':
        positionsArray[i] = 14;
          break;
      case 'o':
        positionsArray[i] = 15;
          break;
      case 'p':
        positionsArray[i] = 16;
          break;
      case 'q':
          ppositionsArray[i] = 17;
          break;
      case 'r':
        positionsArray[i] = 18;
          break;
      case 's':
        positionsArray[i] = 19;
          break;
      case 't':
        positionsArray[i] = 20;
          break;
      case 'u':
        positionsArray[i] = 21;
          break;
      case 'v':
        positionsArray[i] = 22;
          break;
      case 'w':
        positionsArray[i] = 23;
          break;
      case 'x':
        positionsArray[i] = 24;
          break;
      case 'y':
        positionsArray[i] = 25;
          break;
      case 'z':
        positionsArray[i] = 26;
          break;
  }
}

console.log(positionsArray);