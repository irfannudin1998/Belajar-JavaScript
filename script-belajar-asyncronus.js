// (CALL BACK)
// beberapa contoh async method
// setTimeout(handler,time)
// function menghadirkan(){
//     console.log('saya hadir!!!')
// };
// function memanggil(){
//     console.log("tolong hadirlah!!!")
//     setTimeout(menghadirkan,5000)
// };
// console.log(memanggil());

// setInterval(handler, time)
// function uangBulanan(){
//     console.log("ini uang untuk bulan depan ya!")
// };
// function mintaUang(){
//     console.log('minta uang bulanannya donk pak');
//     setInterval(uangBulanan,2000)
// };

// const meminta = mintaUang();
// console.log(meminta);

// fungsi call back = yaitu function yang dijadikan argument di function yang lain.(funsi dari callback functio adalah supaya function yang lambat tetap akan dieksekusi duluan sebelum function yang urutannya memang lebih terakhir.)
// function haloKabar(callback){
//      console.log('halo apa kabar!, salam kenal')
//     callback();
// };
// function selamatJalan(){
//     console.log('selamat jalan')
// };
// haloKabar(selamatJalan);
// function penjumlahan(callback, a, b){
//     let hasil = a+b;
//     callback (hasil);
// };
// function consoleHasil(hasil){
// console.log(hasil);
// };

// penjumlahan(consoleHasil,5,6);