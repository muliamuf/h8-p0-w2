console.log('LOOPING PERTAMA');
var i = 2;
while (i<=20){
  console.log(i+'-I love coding');
  i+=2;
}
console.log('LOOPING KEDUA');
var i = 20;
while (i>0){
  console.log(i+'-I will become fullstack developer');
  i-=2;
}

console.log("____________________________________");

console.log('LOOPING PERTAMA');
for(var i=1;i<20;i++){
  console.log(i+'-I love coding');
}
console.log('LOOPING KEDUA');
for(var i=20;i>0;i--){
  console.log(i+'-I will become fullstack developer');
}

console.log("____________________________________");
for(var i=1;i<=100;i++){
  if(i%2 === 0){
    console.log('angka ke-'+i+' genap');
  }
  else{
    console.log('angka ke-'+i+' ganjil');
  }
}
console.log("____________________________________");
for(var i=1;i<=100;i+=2){
  if(i%3 === 0){
    console.log('3 KELIPATAN 3');
  }
  else{
    console.log('');
  }
}
console.log("____________________________________");
for(var i=1;i<=100;i+=5){
  if(i%6 === 0){
    console.log('6 KELIPATAN 6');
  }
  else{
    console.log('');
  }
}
console.log("____________________________________");
for(var i=1;i<=100;i+=9){
  if(i%10 === 0){
    console.log('10 KELIPATAN 10');
  }
  else{
    console.log('');
  }
}