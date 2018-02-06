var nama = 'mufqi';
var peran = 'Tabib';
if (peran === '') {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} 
else if (peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjata mu!');
} 
else if (peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ',kamu akan membantu teman mu yang terluka.');
} 
else if (peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' +peran +' ' +nama +',ciptakan keajaiban yang membantu kemenangan mu!');
}