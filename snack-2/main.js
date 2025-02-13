const firstWord = prompt('Type a word')
const secondWord = prompt('Type another word')

console.log(firstWord);
console.log(secondWord);

if (firstWord.leghnt < secondWord.leghnt) {
    console.log(firstWord);
} else if (secondWord.length < firstWord.length) {
    console.log(secondWord);
}