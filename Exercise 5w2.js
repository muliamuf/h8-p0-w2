var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
var space = ' ';
var result = word.concat(space,second,space,third,space,fourth,space,fifth,space,sixth,space,seventh);
console.log(result);
console.log('_____________________________________')

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[10]+word[11]+word[12]+word[13]+word[14]; // do your own!
var thirdWord = word[15]+word[16]; // do your own!
var fourthWord = word[18]+word[19]; // do your own!
var fifthWord = word[21]+word[22]+word[23]+word[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('_____________________________________')

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14); // do your own!
var thirdWord3 = word.substring(15, 16); // do your own!
var fourthWord3 = word.substring(18, 19); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!
console.log('_____________________________________')

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
var secondWord4WordLength = secondWord4.length;
var thirdWord4WordLength = thirdWord4.length;
var fourthWord4WordLength = fifthWord4.length;
var fifthWord4WordLength = fifthWord4.length;// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4WordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4WordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4WordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4WordLength);

console.log('First Word: ' + exampleFirstWord4);
console.log('Second Word: ' + secondWord4);
console.log('Third Word: ' + thirdWord4);
console.log('Fourth Word: ' + fourthWord4);
console.log('Fifth Word: ' + fifthWord4);
