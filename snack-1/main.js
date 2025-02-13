/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const firstNumber = Number(prompt('Insert a number'))
const secondNumber = Number(prompt('Insert another number'))

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
} else if (firstNumber === secondNumber)  {
    console.log('The numbers are equal');
}
