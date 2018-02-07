var rows1 = 5;
for(var i=0; i<rows1;i+=1){
  console.log('*');
}
console.log('_____________________________________');
var tampung = '';
var rows2 = 5;
for(var i=0; i<rows2;i++){
  tampung = '';
  for(var j=0; j<rows2;j++){
    tampung+= '*';
  }
  console.log(tampung);
}
console.log('_____________________________________');
var tampung = '';
var rows3 = 5;
for(var i = 0 ; i <= rows3;i++){
  tampung ='';
  for(var j=0 ; j < i ;j++){
    tampung+='*';
  }
  console.log(tampung);
}