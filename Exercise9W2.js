function shoutOut(){
  return ('Halo Function!');
}/*
 BUATLAH KODE FUNCTION DISINI
*/

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

console.log('_____________________________________');
function calculateMultiply(num1,num2){
  return num1*num2;
}/*
 BUATLAH KODE FUNCTION DISINI
*/

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('_____________________________________');
function processSentence(nama,age,address,hobby){
  return 'Nama saya '+nama+', umur saya '+age+' tahun,'+' alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!'
}/*
 BUATLAH KODE FUNCTION DISINI
*/

var nama = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"