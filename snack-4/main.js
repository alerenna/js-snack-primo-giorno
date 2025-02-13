/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let number = []

for (let i = 1; i <= 6; i++) {
    let userNumber = Number(prompt(`Inserisci un numero: ${i}`))
    
    if (userNumber % 2 === 1) {
        number.push(userNumber)
    }
}

console.log('I numeri dispari inseriti sono: ' + number);
