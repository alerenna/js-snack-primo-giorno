/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


  let sum = 0

  for (let i = 1; i < 5; i++) {
    let number = Number(prompt(`Insert a number ${i}`))
    sum += number
  }

  console.log('La somma è ' + sum);
  

