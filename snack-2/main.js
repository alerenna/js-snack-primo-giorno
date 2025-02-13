const firstWord = prompt('Type a word')
const secondWord = prompt('Type another word')

if (firstWord.length < secondWord.length) {
    console.log(firstWord + ' ' + secondWord);
} else if (secondWord.length < firstWord.length) {
    console.log(secondWord + ' ' + firstWord);
} else if (secondWord.length == firstWord.length) {
    console.log('The words have the same lenght'); 
}