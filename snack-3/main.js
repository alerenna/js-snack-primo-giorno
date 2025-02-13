/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* const number = []
let somma = 0

for(let i = 1; i <= 3; i++) {
    number.push(prompt('Enter a number'));
  }
  
  for(let i = 1; i <= 3; i++) {
    somma += number[i] 
  }

  console.log(somma); */
  

  let sum = 0

  for (let i = 1; i < 5; i++) {
    let number = Number(prompt(`Insert a number ${i}`))
    sum += number
  }

  console.log('La somma è ' + sum);
  

